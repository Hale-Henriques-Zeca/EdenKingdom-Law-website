export default function CorporateEscortPage() {
  return (
    <section className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0F14] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,77,0.28),transparent_60%)]" />

{/* TÍTULO PRINCIPAL */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 py-32">
        
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--gold)] mb-4">
          EdenKingDom Corporate Escort (E-Escort)
        </h1>

        <p className="text-xl text-gray-300 mb-2">
          Escolta Corporativa
        </p>

        <p className="text-gray-400 max-w-4xl">
          Unidade especializada em proteção ativa, mobilidade estratégica e
          segurança avançada no ecossistema EdenKingDom.
        </p>
      </div>

      {/* FUNÇÃO PRINCIPAL */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          👉 Função principal
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          Proteção ativa, mobilidade estratégica e segurança avançada.
        </p>
      </div>

      {/* RESPONSABILIDADES */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-[var(--gold)] mb-6">
          Responsabilidades da Escolta Corporativa
        </h2>

        <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-5xl">
          <li>
            Guarda-costas corporativos (executivos, juízes, investigadores)
          </li>
          <li>
            Proteção de testemunhas institucionais
          </li>
          <li>
            Transferência segura de bens sensíveis (documentos, ativos, provas)
          </li>
          <li>
            Movimentação corporativa estratégica (terra / ar / mar)
          </li>
          <li>
            Segurança avançada em deslocações internacionais
          </li>
          <li>
            Planeamento de rotas e contra-vigilância
          </li>
          <li>
            Operações de evacuação e extração
          </li>
          <li>
            Proteção em cenários de alto risco
            (instabilidade política, conflitos, ameaças)
          </li>
        </ul>
      </div>

      {/* NÍVEL & MANDATO */}
      <div className="max-w-6xl mx-auto border border-yellow-500/30 rounded-lg p-6 bg-yellow-500/5">
        <p className="text-yellow-400 font-semibold mb-2">
          🛡️ Nível
        </p>
        <p className="text-gray-300 mb-4">
          Segurança tática, estratégica e executiva
        </p>

        <p className="text-yellow-400 font-semibold mb-2">
          ⚠️ Mandato de atuação
        </p>
        <p className="text-gray-300">
          Atua exclusivamente sob mandato corporativo,
          jurídico ou institucional e/ou legal.
        </p>
      </div>
    </section>
  );
}
