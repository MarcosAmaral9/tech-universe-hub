#!/usr/bin/env node
/**
 * Valida que os posts substituídos das categorias geek, otaku e invest
 * seguem o template mínimo:
 *   1. Título        → <h1 ...>
 *   2. Introdução    → parágrafo "lead" (className com "lead" ou primeiro <p> após o hero)
 *   3. Gancho        → <BackNavigation ... category="..."> (breadcrumb colorido)
 *   4. Lista         → pelo menos um <ul> ou <ol>
 *   5. CTA           → <EditorialTake ...> (análise do Marcos = CTA editorial)
 *   6. Fontes        → <ArticleSources ...>
 *   7. Comentários   → <CommentSection ... />
 *
 * Página inicial (Index) é ignorada por natureza — só checamos posts.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";

// Arquivos substituídos pelos zips das três categorias
const GEEK = [
  "ACRanking2026","BannerlordArvoresTropas","BannerlordCulturasReinos",
  "BannerlordModsEssenciais","BannerlordTerritoriosFaccoes",
  "CrimsonDesertIniciantes","CrimsonDesertMapa","CrimsonDesertPatches",
  "LancamentosGamesAbril2026","NintendoSwitch2Completo2026",
  "SuperMarioGalaxyMovie2026","ZeldaOcarinaRemake2026",
];
const OTAKU = [
  "AprenderJaponesAnime2026","CulturaOtakuBrasil2026","DemonSlayerHashira2026",
  "DiferencaMangasManhuas","DiferenciarManhuasManhwas","FreierenTemporada32026",
  "GuiaCosplay2026","HellMode","Isekai2026","IsekaiMokushirokuMynoghra2026",
  "IsekaiNonbiriNouka","JJKTemporada42026","JogosAnime2026","JujutsuKaisenGuia2026",
  "KaijuNo8Temporada22026","KizokuTensei","MangaVsAnime2026","MaousamaRetry",
  "MelhoresMangas2026","MelhoresManhwasSistema","MerchandisingOtaku2026","MugenGacha",
  "NarutoEspeciais2026","OkirakuRyoushu","OnePieceElbaf2026","OnePieceFinalSaga2026",
  "OverlordPersonagens","ReMonster2026","SpringSeasonAnimes2026","Tsukimichi",
];
const INVEST = [
  "AcoesBrasileirasBaratas2026","BerkshireAbelMeeting2026","Bitcoin2026ValeComprar",
  "BitcoinCripto2026","CDB2026Guia","CalculadorasFinanceiras","CarteiraIniciantes2026",
  "CopomAbril2026","CopomSelic145Maio2026","CortarGastos2026","DolarQueda2026",
  "ETFs2026","ETFsB3Guia2026","EconomiaDomestica2026","EducacaoFinanceira3Baldes",
  "FIIs2026","FIIs2026AindaVale","FIIsDefensivosAbril2026","GuerraIraPetrobras2026",
  "IAFinancasPessoais2026","IAMercadoFinanceiro2026","IRPF2026","IbovespaRecordeSelic2026",
  "InflacaoProtegerInvestimentos2026","InvestirEmTecnologia2026",
  "MagnificentSevenResultados2026","OuroMaximaHistorica2026","PetroleoBrent125Ormuz2026",
  "PlanejamentoFinanceiro2026","PnadDesempregoMarco2026","PoupancaVsCDBTesouro2026",
  "PrevidenciaPrivada2026","RendaPassiva2026","ReservaEmergencia2026",
  "SairDasDividas2026","SelicComecaCair2026","TesouroDireto2026","TesouroPrefixadoVsIPCA2026",
];

const GROUPS = [
  ["geek", GEEK],
  ["otaku", OTAKU],
  ["invest", INVEST],
];

const CHECKS = [
  { name: "Título (h1)",       re: /<h1\b/ },
  { name: "Introdução (lead)", re: /className="[^"]*\blead\b/ },
  { name: "Gancho (BackNav)",  re: /<BackNavigation\b[^>]*category=/ },
  { name: "Lista (ul/ol)",     re: /<(ul|ol)\b/ },
  { name: "CTA (EditorialTake)", re: /<EditorialTake\b/ },
  { name: "Fontes",            re: /<ArticleSources\b/ },
  { name: "Comentários",       re: /<CommentSection\b/ },
];

const available = new Set(readdirSync(DIR));
let totalErrors = 0;
let totalChecked = 0;
const missing = [];

for (const [cat, list] of GROUPS) {
  console.log(`\n▸ ${cat} (${list.length} posts)`);
  for (const name of list) {
    const file = `${name}.tsx`;
    if (!available.has(file)) {
      missing.push(`${cat}/${file}`);
      continue;
    }
    totalChecked++;
    const src = readFileSync(join(DIR, file), "utf8");
    const failed = CHECKS.filter(c => !c.re.test(src)).map(c => c.name);
    if (failed.length) {
      totalErrors++;
      console.log(`  ✗ ${file}  →  falta: ${failed.join(", ")}`);
    }
  }
}

if (missing.length) {
  console.log(`\n⚠ Arquivos ausentes (${missing.length}):`);
  for (const m of missing) console.log(`  - ${m}`);
}

console.log(`\n${totalErrors === 0 ? "✓" : "✗"} ${totalChecked} posts verificados, ${totalErrors} fora do template, ${missing.length} ausentes.`);
process.exit(totalErrors === 0 && missing.length === 0 ? 0 : 1);
