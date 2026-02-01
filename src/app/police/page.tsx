export default function PolicePage() {
  return (
    <section className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(63,79,60,0.35),transparent_65%)]" />

{/* TÍTULO PRINCIPAL */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 py-32">
        <h1 className="text-5xl font-bold text-ekd-gold mb-6">
          E-Police
        </h1>

        <p className="text-xl text-ekd-gray max-w-3xl mb-12">
          Polícia corporativa responsável pela segurança interna,
          ordem institucional e proteção do ecossistema EdenKingDom.
        </p>


        <p className="text-gray-400 max-w-4xl">
          Unidade institucional responsável por manter a ordem, a segurança e a
          conformidade interna dentro do ecossistema EdenKingDom.
        </p>
      </div>

      {/* FUNÇÃO PRINCIPAL */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          👉 Função principal
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          Manter ordem, segurança e conformidade interna dentro do ecossistema
          EdenKingDom.
        </p>
      </div>

      {/* RESPONSABILIDADES */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--gold)] mb-6">
          Responsabilidades da E-Police
        </h2>

        <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-5xl">
          <li>
            Segurança interna de instalações EdenKingDom (sedes, data centers,
            tribunais privados)
          </li>
          <li>
            Controle de acesso e vigilância institucional
          </li>
          <li>
            Proteção de funcionários, juízes, auditores e investigadores EKD
          </li>
          <li>
            Monitoramento preventivo de riscos
          </li>
          <li>
            Atuação como polícia interna corporativa
          </li>
          <li>
            Apoio operacional ao EBI (sem involvimento em investigação própria)
          </li>
          <li>
            Garantia de integridade física e preservação de provas e documentos
          </li>
          <li>
            Cumprimento rigoroso de protocolos legais e éticos
          </li>
        </ul>
      </div>
    </section>
  );
}
