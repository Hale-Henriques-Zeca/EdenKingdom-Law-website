"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* ================= FUNDO CINEMATOGRÁFICO ================= */}
      {/* Base */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #020617 100%)",
        }}
      />

      {/* Glow dourado (autoridade institucional) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(201,162,77,0.28), transparent 60%)",
        }}
      />

      {/* Glow verde militar (integridade / justiça) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 60% 45%, rgba(63,79,60,0.35), transparent 65%)",
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

        {/* ================= BOTÕES DE ACESSO ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Law Audition */}
          <Link href="/law-audition">
            <button className="px-6 py-3 border border-ekd-gold text-ekd-gold
                               hover:bg-ekd-gold hover:text-black transition
                               rounded-md font-medium">
              Law Audition
            </button>
          </Link>

          {/* Public Integrity */}
          <Link href="/public-integrity">
            <button className="px-6 py-3 border border-ekd-gray text-ekd-gray
                               hover:bg-ekd-gray hover:text-black transition
                               rounded-md font-medium">
              Integridade Pública
            </button>
          </Link>

          {/* EBI */}
          <Link href="/ebi">
            <button className="px-6 py-3 bg-ekd-gold text-black
                               hover:opacity-90 transition
                               rounded-md font-semibold">
              EBI – Investigação
            </button>
          </Link>

          {/* Police */}
          <Link href="/police">
            <button className="px-6 py-3 border border-white/20 text-ekd-pearl
                               hover:bg-white/10 transition
                               rounded-md font-medium">
              Police
            </button>
          </Link>

{/* ✅ CORPORATE ESCORT */}
          <Link href="/corporate-escort">
            <button className="px-6 py-3 border border-ekd-gold text-ekd-gold
                               hover:bg-ekd-gold hover:text-black transition rounded-md">
              Corporate Escort
            </button>
          </Link>

          {/* Insurance */}
          <Link href="/insurance">
            <button className="px-6 py-3 border border-ekd-green text-ekd-green
                               hover:bg-ekd-green hover:text-black transition
                               rounded-md font-medium">
              Insurance
            </button>
          </Link>

          {/* ✅ E-LAWER */}
<Link href="/lawer">
  <button className="px-6 py-3 border border-ekd-gold text-ekd-gold
                     hover:bg-ekd-gold hover:text-black transition rounded-md">
    E-Lawer (Advocacia Corporativa)
  </button>
</Link>
        </motion.div>
      </section>



      {/* ================= PILARES ================= */}
      <section className="relative z-10 grid md:grid-cols-3 gap-8 px-8 pb-32 max-w-6xl mx-auto">

        <div className="border border-white/10 p-8 bg-black/40 backdrop-blur">
          <h3 className="text-ekd-gold font-bold mb-3">Law Audition</h3>
          <p className="text-sm text-ekd-gray">
            Auditoria jurídica independente e revisão de julgamentos.
          </p>
        </div>

        <div className="border border-white/10 p-8 bg-black/40 backdrop-blur">
          <h3 className="text-ekd-gold font-bold mb-3">Public Integrity</h3>
          <p className="text-sm text-ekd-gray">
            Defesa institucional do cidadão e do interesse público.
          </p>
        </div>

        <div className="border border-white/10 p-8 bg-black/40 backdrop-blur">
          <h3 className="text-ekd-gold font-bold mb-3">EBI</h3>
          <p className="text-sm text-ekd-gray">
            Investigação forense privada, internacional e sigilosa.
          </p>
        </div>

{/* ✅ NOVO PILAR – CORPORATE ESCORT */}
        <div className="border border-white/10 p-8 bg-black/40 backdrop-blur">
          <h3 className="text-ekd-gold font-bold mb-3">Corporate Escort</h3>
          <p className="text-sm text-ekd-gray">
            Guarda-costas corporativos, movimentação estratégica,
            escolta de bens sensíveis e proteção executiva.
          </p>
        </div>

      </section>
    </main>
  );
}
