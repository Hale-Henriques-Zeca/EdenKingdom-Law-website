"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LawAccessCards from "./LawAccessCards";
import {
  Scale,
  ShieldCheck,
  Briefcase,
  Users,
  Brain,
  Building2,
  Gavel, 
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* ================= FUNDO CINEMATOGRÁFICO ================= */}
      {/* Fundo base */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(135deg, #1C2D5A 0%, #0B0E14 100%)",
          }}
        />

        {/* Glow azul */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(28,45,90,0.45), transparent 60%)",
          }}
        />

        {/* Glow verde (portal) */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(31,169,113,0.22), transparent 65%)",
          }}
        />

      {/* ================= HERO ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-48 pb-32 text-center">

        {/* TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-ekd-gold mb-6 tracking-wide"
        >
          E-Law
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-ekd-gray mb-10"
        >
          Justiça, Verificada.
        </motion.p>

        {/* DESCRIÇÃO INSTITUCIONAL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed mb-14"
        >
          A <strong>EdenKingDom Law</strong> é uma instituição internacional
          de auditoria jurídica, integridade pública e investigação forense.
          Não vendemos defesa. <strong>Protegemos a justiça.</strong>
        </motion.p>


        {/* ================= PAINEL INFORMATIVO (AVISO PÚBLICO) ================= */}
        <div className="border border-ekd-gold/40 bg-black/50 backdrop-blur p-6 rounded-lg mb-12">
          <p className="text-sm leading-relaxed text-ekd-gray">
            ⚠️ <strong>Nota Pública Importante</strong>
            <br /><br />
            O website da <strong>EdenKingDom Law (E-Law)</strong> encontra-se em
            constante desenvolvimento. Por essa razão, parte da informação
            apresentada é ainda de natureza introdutória e minimalista,
            aguardando futuras atualizações institucionais.
            <br /><br />
            A divisão <strong>E-Law</strong> da EdenKingDom Corporation informa
            ao público — pessoas jurídicas e indivíduos — que:
            <br /><br />
            ❌ <strong>A E-Law não presta serviços jurídicos individuais
            de defesa pessoal</strong>, nem atua em interesses privados,
            singulares ou comerciais.
            <br /><br />
            ✅ A E-Law atua exclusivamente na defesa de
            <strong> interesses corporativos, institucionais e públicos</strong>,
            por meio do <strong>EdenKingDom Lawer Bureau (E-Lawer)</strong>.
          </p>
        </div>

        {/* ================= EXPLICAÇÃO INSTITUCIONAL ================= */}
        <div className="space-y-6 text-lg text-ekd-gray leading-relaxed">

          <p>
            A EdenKingDom Law atua como <strong>contribuinte público</strong>
            no combate à corrupção, à má jurisdição e à degradação da
            cultura jurídica e do bom senso institucional.
          </p>

          <p>
            Caso um processo criminal ou jurídico tenha sido
            <strong> mal julgado</strong>, o cidadão pode recorrer à
            <strong> divisão de Integridade Pública</strong> da EdenKingDom Law
            para esclarecimento, avaliação técnica e análise independente.
          </p>

          <p>
            A EdenKingDom Law, enquanto entidade institucional,
            pode realizar <strong>visitas técnicas</strong> a:
          </p>

          <ul className="list-disc list-inside ml-4">
            <li>Penitenciárias</li>
            <li>Instâncias jurídicas</li>
            <li>Tribunais e órgãos judiciais</li>
          </ul>

          <p>
            No caso de atendimento presencial no nosso gabinete,
            será realizado um <strong>estudo completo e aprofundado</strong>
            do processo.
          </p>

          <p>
            Havendo indícios de <strong>má jurisdição</strong>,
            a EdenKingDom Law poderá:
          </p>

          <ul className="list-disc list-inside ml-4">
            <li>Requerer novo julgamento por via legal</li>
            <li>Emitir relatórios de auditoria jurídica (Law Audition)</li>
            <li>Apresentar queixa formal contra o tribunal competente</li>
          </ul>

          <p>
            Caso o tribunal negue a revisão, o cidadão mantém,
            por força da lei, o direito de queixa contra a instância
            judicial, sendo então acionado o
            <strong> corpo de advogados corporativos EKD</strong>,
            sempre dentro dos limites legais.
          </p>

          <p className="text-ekd-gold font-semibold">
            A humanidade está com a EdenKingDom desta vez.
            <br />
            Justiça não é mercadoria. Justiça é responsabilidade.
          </p>

        </div>
        
        {/* ================= BOTÕES DE ACESSO ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Law Audition */}
          <Link href="/law-audition">
          <Scale />,
            <button className="px-6 py-3 border border-ekd-gold text-ekd-gold
                               hover:bg-ekd-gold hover:text-black transition
                               rounded-md font-medium">
              Law Audition
            </button>
          </Link>

          {/* Public Integrity */}
          <Link href="/public-integrity">
          <ShieldCheck />,
            <button className="px-6 py-3 border border-ekd-gray text-ekd-gray
                               hover:bg-ekd-gray hover:text-black transition
                               rounded-md font-medium">
              Integridade Pública
            </button>
          </Link>

          {/* EBI */}
          <Link href="/ebi">
          <Briefcase />,
            <button className="px-6 py-3 bg-ekd-gold text-black
                               hover:opacity-90 transition
                               rounded-md font-semibold">
              EBI – Investigação
            </button>
          </Link>

          {/* Police */}
          <Link href="/police">
          <Gavel />,
            <button className="px-6 py-3 border border-white/20 text-ekd-pearl
                               hover:bg-white/10 transition
                               rounded-md font-medium">
              Police
            </button>
          </Link>

{/* ✅ CORPORATE ESCORT */}
          <Link href="/corporate-escort">
          <Users />,
            <button className="px-6 py-3 border border-ekd-gold text-ekd-gold
                               hover:bg-ekd-gold hover:text-black transition rounded-md">
              Corporate Escort
            </button>
          </Link>

          {/* Insurance */}
          <Link href="/insurance">
          <ShieldCheck />,
            <button className="px-6 py-3 border border-ekd-green text-ekd-green
                               hover:bg-ekd-green hover:text-black transition
                               rounded-md font-medium">
              Insurance
            </button>
          </Link>

          {/* ✅ E-LAWER */}
<Link href="/lawer">
<Building2 />,
  <button className="px-6 py-3 border border-ekd-gold text-ekd-gold
                     hover:bg-ekd-gold hover:text-black transition rounded-md">
    E-Lawer (Advocacia Corporativa)
  </button>
</Link>

{/* 🧠 DASHBOARD IA JURÍDICO */}
<Link href="/ai-dashboard">
<Brain />,
  <button
    className="px-6 py-3 border border-ekd-gold text-ekd-gold
               hover:bg-ekd-gold hover:text-black transition rounded-md"
  >
    Dashboard IA Jurídico
  </button>
</Link>

        </motion.div>
<LawAccessCards />
      </section>


    </main>
  );
}
