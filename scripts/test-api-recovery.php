<?php
// Testa funções puras e fronteiras de publicação sem credenciais nem provedores.
$source = file_get_contents(__DIR__ . '/../public/api.php');
function loadApiFunction(string $name, string $source): void {
    $start = strpos($source, 'function ' . $name . '(');
    if ($start === false) throw new RuntimeException('Função ausente: ' . $name);
    $next = strpos($source, "\nfunction ", $start + 1);
    $text = substr($source, $start, $next === false ? null : $next - $start);
    // O fim da função principal é sempre uma chave no início de linha.
    $end = strpos($text, "\n}") + 2;
    eval(substr($text, 0, $end));
}
function check(bool $condition, string $label): void {
    if (!$condition) throw new RuntimeException($label);
    echo "OK: $label\n";
}
foreach (['nextBackfillGroup', 'validHistorySnapshot', 'buildHistorySnapshot', 'publishHistorySnapshot', 'ensurePostViewsSchema'] as $name) loadApiFunction($name, $source);
function historyExpectedAssets(): array {
    return ['b3' => ['PETR4','VALE3','ITUB4','BBDC4','ABEV3','WEGE3','BBAS3','RENT3','MGLU3','SUZB3'],
        'crypto' => ['BTC','ETH','SOL','BNB','ADA','XRP','LINK','DOT'], 'currency' => ['USD','EUR','ARS','PYG'], 'metal' => ['XAU','XAG']];
}
$snapshot = ['generatedAt' => '2026-10-07T12:00:00Z', 'assets' => []];
foreach (historyExpectedAssets() as $type => $codes) {
    foreach ($codes as $code) {
        for ($i = 0; $i < ($type === 'b3' ? 180 : 300); $i++) {
            $snapshot['assets'][$type][$code][] = ['date' => date('Y-m-d', strtotime("2026-01-01 +$i days")), 'price' => $i + 1];
        }
    }
}
check(validHistorySnapshot(json_encode($snapshot)), 'Aceita os 24 ativos completos');
array_pop($snapshot['assets']['crypto']['BTC']);
check(!validHistorySnapshot(json_encode($snapshot)), 'Rejeita série incompleta de um único ativo');
check(array_map('nextBackfillGroup', range(0, 5)) === ['b3','crypto','currency','b3','crypto','currency'], 'Nenhuma categoria fica permanentemente sem orçamento');

function refreshHistoryState(PDO $db): array { return ['b3' => ['PETR4' => ['complete' => false]]]; }
class NoQueryPDO extends PDO {
    public function __construct() {}
    public function query(string $query, ?int $fetchMode = null, mixed ...$args): PDOStatement|false { throw new RuntimeException('Não deve consultar/publicar série parcial'); }
}
check(publishHistorySnapshot(new NoQueryPDO()) === ['published' => false, 'reason' => 'incomplete'], 'Preserva a cópia anterior se um ativo estiver incompleto');

$db = new PDO('sqlite::memory:');
$db->exec('CREATE TABLE post_views (id INTEGER, slug TEXT)');
$db->exec("INSERT INTO post_views VALUES (1, 'leitura-antiga')");
ensurePostViewsSchema($db);
check($db->query('SELECT COUNT(*) FROM post_views')->fetchColumn() == 1, 'Não recria nem apaga tabela de leituras existente');

preg_match_all("/setcookie\('vc_oauth_state'.*?\);/s", $source, $cookies);
check(count($cookies[0]) === 2, 'Cria e remove o cookie de state');
foreach ($cookies[0] as $cookie) {
    check(str_contains($cookie, "'path' => '/'") && str_contains($cookie, "'httponly' => true") && str_contains($cookie, "'secure' => true") && str_contains($cookie, "'samesite' => 'Lax'"), 'Cookie OAuth chega ao api.php sem perder proteção');
}
check(str_contains($source, 'hash_equals($expectedState, $state)'), 'Validação obrigatória do state preservada');

// Exercita a API inteira em outro processo, sem banco e com configuração fictícia.
// Se o início OAuth voltar a depender do PDO, a resposta deixa de conter a URL.
$fixture = sys_get_temp_dir() . '/vc-google-test-' . bin2hex(random_bytes(8));
mkdir($fixture, 0700);
try {
    file_put_contents($fixture . '/api.php', $source);
    file_put_contents($fixture . '/.env.php', '<?php $GOOGLE_CLIENT_ID="test.apps.googleusercontent.com"; $GOOGLE_SECRET="test-only"; $AUTH_SECRET="test-only-not-a-production-key"; $DB_HOST=""; $DB_NAME=""; $DB_USER=""; $DB_PASS="";');
    $runner = '$_SERVER["REQUEST_METHOD"]="GET"; $_GET["action"]="google_auth_url"; require ' . var_export($fixture . '/api.php', true) . ';';
    $output = [];
    $status = 0;
    exec(escapeshellarg(PHP_BINARY) . ' -r ' . escapeshellarg($runner), $output, $status);
    $result = json_decode(implode("\n", $output), true);
    check($status === 0 && isset($result['url']), 'Inicia Google normalmente sem conexão MySQL');
    $url = parse_url($result['url']);
    parse_str($url['query'] ?? '', $params);
    check(($url['scheme'] ?? '') === 'https' && ($url['host'] ?? '') === 'accounts.google.com', 'Autorização usa apenas o Google oficial via HTTPS');
    check(($params['redirect_uri'] ?? '') === 'https://viciocode.com/auth/google', 'Retorno Google usa o endereço público registrado');
    check(strlen($params['state'] ?? '') === 64 && ($params['scope'] ?? '') === 'openid email profile', 'Início OAuth mantém state aleatório e escopos esperados');
} finally {
    foreach (['api.php', '.env.php'] as $file) unlink($fixture . '/' . $file);
    rmdir($fixture);
}
echo "Testes PHP concluídos.\n";