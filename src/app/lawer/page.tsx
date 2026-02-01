"use client";

export default function LawerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* ================= FUNDO CINEMATOGRÁFICO ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(63,79,60,0.35),transparent_65%)]" />

      {/* ================= CONTEÚDO ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 pt-40 pb-32">

        {/* TÍTULO */}
        <h1 className="text-5xl font-bold text-ekd-gold mb-6">
          E-Lawer
        </h1>

        <p className="text-xl text-ekd-gray max-w-3xl mb-12">
          EdenKingDom Lawer Bureau — advogados da corporativa e institucional, apenas
          ao serviço da integridade e defesa da nossa empresa a nível e escala global - EdenKingDom Corporation. 
        </p>

      </section>
    </main>
  );
}
