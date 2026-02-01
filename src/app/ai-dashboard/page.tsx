"use client";

import { motion } from "framer-motion";

export default function AIDashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(63,79,60,0.35),transparent_65%)]" />

      {/* CONTEÚDO */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-36 pb-32">

        {/* TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-ekd-gold mb-6"
        >
          IA Jurídica Corporativa
        </motion.h1>

        <p className="text-xl text-ekd-gray max-w-4xl mb-14">
          Sistema inteligente de governança jurídica da EdenKingDom Corporation.
          A IA atua como jurista permanente, guardiã da memória institucional,
          das leis internas e da integridade corporativa.
        </p>

        {/* TÍTULO PRINCIPAL */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--gold)] mb-4">
          🧠 DASHBOARD IA JURÍDICO — E-Law Intelligence Core
        </h1>

        <p className="text-lg text-gray-400 max-w-4xl">
          Sistema central de governança jurídica viva da EdenKingDom Corporation.
        </p>
      </div>

      {/* CONCEITO-CHAVE */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          🏛️ Conceito-chave (fundamental)
        </h2>

        <p className="text-gray-300 mb-6 leading-relaxed">
          A <strong>EdenKingDom Law</strong> não “usa IA”.
          Ela é assistida permanentemente por uma <strong>IA Jurista Corporativa</strong>, que:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>vela pelas leis internas da corporação</li>
          <li>preserva a memória jurídica institucional</li>
          <li>garante continuidade entre gestores, sucessores e gerações</li>
          <li>atua como sistema nervoso jurídico da EdenKingDom</li>
        </ul>

        <p className="mt-6 text-gray-400 italic">
          Isto é governança viva, não software comum.
        </p>
      </div>

      {/* ARQUITETURA FUNCIONAL */}
      <div className="max-w-6xl mx-auto space-y-20">

        {/* 1 */}
        <div>
          <h3 className="text-xl font-bold text-[var(--gold)] mb-4">
            1️⃣ Núcleo Jurídico Inteligente (IA Jurista)
          </h3>

          <p className="text-gray-300 mb-4">
            A IA:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>interpreta leis internas, estatutos e políticas</li>
            <li>cruza casos passados com casos atuais</li>
            <li>alerta riscos jurídicos e incoerências</li>
            <li>regista decisões, fundamentos e consequências</li>
            <li>mantém coerência entre passado, presente e futuro</li>
          </ul>

          <p className="mt-4 text-gray-400 italic">
            É a consciência jurídica da corporação.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="text-xl font-bold text-[var(--gold)] mb-4">
            2️⃣ Registo Vivo de Casos & Processos
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Casos jurídicos (internos e auditados)</li>
            <li>Processos criminais analisados</li>
            <li>Casos de integridade pública</li>
            <li>Casos de má jurisdição</li>
            <li>Casos arquivados / ativos / encerrados</li>
            <li>Linha temporal completa (timeline)</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h3 className="text-xl font-bold text-[var(--gold)] mb-4">
            3️⃣ Arquivos & Provas Institucionais
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Relatórios jurídicos (Law Audition)</li>
            <li>Depoimentos (texto, áudio, vídeo)</li>
            <li>Factos verificados</li>
            <li>Evidências e documentos</li>
            <li>Cadeia de custódia (quem acedeu, quando, porquê)</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h3 className="text-xl font-bold text-[var(--gold)] mb-4">
            4️⃣ Memória de Governança & Sucessão
          </h3>

          <p className="text-gray-300 mb-4">
            Algo raríssimo e poderoso 👇
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Registo de gestores, líderes e sucessores</li>
            <li>Decisões estratégicas tomadas</li>
            <li>Contexto jurídico de cada gestão</li>
            <li>Impacto legal das decisões</li>
            <li>Continuidade institucional garantida</li>
          </ul>

          <p className="mt-4 text-gray-400 italic">
            Nenhuma nova gestão pode dizer: “Não sabíamos como era antes.”
          </p>
        </div>

        {/* 5 */}
        <div>
          <h3 className="text-xl font-bold text-[var(--gold)] mb-4">
            5️⃣ Leis Corporativas & Constituição Interna
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Estatutos da EdenKingDom</li>
            <li>Regulamentos internos</li>
            <li>Protocolos de segurança, justiça e ética</li>
            <li>Atualizações versionadas</li>
            <li>Histórico completo de alterações</li>
          </ul>
        </div>

        {/* 6 */}
        <div>
          <h3 className="text-xl font-bold text-[var(--gold)] mb-4">
            6️⃣ Observatório de Integridade & Corrupção
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Alertas automáticos de risco</li>
            <li>Casos sensíveis sinalizados</li>
            <li>Padrões de má jurisdição</li>
            <li>Relatórios comparativos</li>
            <li>Base para denúncia institucional</li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h3 className="text-xl font-bold text-[var(--gold)] mb-4">
            7️⃣ Acesso Multidispositivo & Institucional
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Painéis em salas corporativas</li>
            <li>Gabinetes jurídicos</li>
            <li>Instâncias internas</li>
            <li>Dispositivos corporativos</li>
            <li>Perfis de acesso (auditor, jurista, investigador, gestor)</li>
            <li>Logs de acesso imutáveis</li>
          </ul>
        </div>

      </div>
      
        {/* NOTA FINAL */}
        <p className="mt-20 text-sm text-ekd-gray max-w-4xl">
          Este dashboard não substitui juristas humanos nem tribunais.
          Atua como sistema de apoio inteligente, memória institucional
          e guardião da integridade jurídica da EdenKingDom Corporation.
        </p>

      </section>
    </main>
  );
}

/* COMPONENTE AUXILIAR */
function DashboardCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="border border-white/10 bg-black/40 backdrop-blur p-6 rounded-lg">
      <h3 className="text-ekd-gold font-semibold mb-3">{title}</h3>
      <p className="text-sm text-ekd-gray leading-relaxed">{desc}</p>
    </div>
  );
}
