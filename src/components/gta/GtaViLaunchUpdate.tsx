import { CheckCircle2, Gamepad2, ShieldAlert, Sparkles } from "lucide-react";

/**
 * Bloco de atualização pós-lançamento compartilhado pelos artigos de GTA VI.
 * Apenas fatos confirmados por Rockstar, Take-Two, Sony, Microsoft ou imprensa
 * especializada. Revisado em 23/11/2026.
 */
export const GTA_VI_REVIEWED_AT = "23 de novembro de 2026";

const status = [
  "Lançado em 19 de novembro de 2026, à meia-noite no horário local de cada país, para PS5 e Xbox Series X|S.",
  "No Xbox One, só por streaming no Xbox Cloud Gaming, com compra separada do jogo. Não existe versão de PS4.",
  "PC e Nintendo Switch 2 continuam sem anúncio oficial da Rockstar.",
  "Preço no Brasil: R$ 449,90 (Standard) e R$ 549,90 (Ultimate, só digital), iguais na PS Store e na Xbox Store.",
  "Nota 99 no Metacritic e US$ 3,79 bilhões em vendas no primeiro dia, segundo a Take-Two.",
  "O novo GTA Online ainda não tem data confirmada pela Rockstar.",
];

const gameplay = [
  { t: "Troca entre Jason e Lucia", d: "A troca acontece durante a ação, até no meio de perseguições. Algumas missões são jogadas com só um dos dois." },
  { t: "Seis estrelas de procurado", d: "A polícia procura pela descrição: rosto, roupa e carro. Queimar ou trocar o veículo apaga a pista do carro." },
  { t: "Foco no combate", d: "Uma barra roxa deixa o tempo mais lento e marca pontos fracos, como o Dead Eye de Red Dead Redemption 2." },
  { t: "Assaltos e roubo de carros", d: "Dá para roubar lojas, joalherias e caixas. O carro pode ser aberto em silêncio ou com o vidro quebrado." },
  { t: "Dinheiro perdido", d: "O dinheiro que o personagem carrega se perde quando ele morre. Depositar no caixa eletrônico virou estratégia." },
  { t: "Mundo e rádio", d: "Leonida tem seis regiões, rádios de vários estilos e, pela primeira vez, podcasts que tocam no celular, também a pé." },
];

export default function GtaViLaunchUpdate() {
  return (
    <aside className="not-prose my-8 rounded-2xl border border-primary/40 bg-primary/5 p-5 md:p-6">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
        <Sparkles className="h-4 w-4" /> Atualizado após o lançamento · {GTA_VI_REVIEWED_AT}
      </p>
      <h2 className="mt-2 text-xl md:text-2xl font-bold text-foreground">GTA VI já foi lançado: o que está confirmado</h2>
      <ul className="mt-4 space-y-2">
        {status.map((s) => (
          <li key={s} className="flex gap-2 text-sm md:text-base text-muted-foreground leading-relaxed">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-6 flex items-center gap-2 text-lg font-bold text-foreground">
        <Gamepad2 className="h-5 w-5 text-secondary" /> Jogabilidade confirmada
      </h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {gameplay.map((g) => (
          <div key={g.t} className="rounded-xl border border-border bg-card/60 p-4">
            <p className="font-semibold text-foreground">{g.t}</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{g.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 flex gap-2 text-xs text-muted-foreground leading-relaxed">
        <ShieldAlert className="h-4 w-4 shrink-0" />
        <span>
          Desempenho: 30 quadros por segundo nos consoles. Segundo a Digital Foundry, PS5 e PS5 Pro usam base 1440p;
          no Pro o PSSR deixa a imagem perto de 4K. Fontes: Rockstar Games, Take-Two, PlayStation Blog, Xbox Wire,
          Digital Foundry e lojas oficiais brasileiras.
        </span>
      </p>
    </aside>
  );
}
