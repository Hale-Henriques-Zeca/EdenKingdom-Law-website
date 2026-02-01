"use client";

import { motion } from "framer-motion";

export default function CertificationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* ================= FUNDO CINEMATOGRÁFICO ================= */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(135deg, #0B0E14 0%, #020617 100%)",
        }}
      />

      {/* Glow dourado fosco */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(201,162,77,0.22), transparent 60%)",
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-ekd-gold mb-6"
        >
          Certificação & Selos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-ekd-gray max-w-3xl mx-auto"
        >
          Reconhecimento institucional concedido pela EdenKingDom Law
          a entidades que demonstram conformidade jurídica, imparcialidade
          processual e integridade operacional.
        </motion.p>
      </section>

      {/* ================= SELOS ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-8">

        {/* SELO 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-black/40 backdrop-blur p-8 rounded-lg"
        >
          <h3 className="text-ekd-gold text-xl font-semibold mb-4">
            Julgamento Justo Verificado
          </h3>
          <p className="text-ekd-gray text-sm leading-relaxed">
            Concedido após auditoria independente que confirma
            o cumprimento do devido processo legal, igualdade
            de tratamento das partes e fundamentação jurídica adequada.
          </p>
        </motion.div>

        {/* SELO 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-white/10 bg-black/40 backdrop-blur p-8 rounded-lg"
        >
          <h3 className="text-ekd-gold text-xl font-semibold mb-4">
            Integridade Processual Certificada
          </h3>
          <p className="text-ekd-gray text-sm leading-relaxed">
            Atesta que procedimentos internos, prazos, provas
            e decisões respeitam os padrões legais e éticos
            reconhecidos internacionalmente.
          </p>
        </motion.div>

        {/* SELO 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-white/10 bg-black/40 backdrop-blur p-8 rounded-lg"
        >
          <h3 className="text-ekd-gold text-xl font-semibold mb-4">
            Práticas Jurídicas Transparentes
          </h3>
          <p className="text-ekd-gray text-sm leading-relaxed">
            Reconhecimento concedido a instituições que adotam
            políticas claras de transparência, rastreabilidade
            e responsabilidade jurídica.
          </p>
        </motion.div>
      </section>

      {/* ================= NOTA LEGAL ================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-32 text-center">
        <p className="text-sm text-ekd-gray leading-relaxed">
          As certificações EdenKingDom Law não substituem decisões
          judiciais nem interferem na soberania dos tribunais.
          Constituem auditorias independentes de natureza técnica,
          ética e institucional, realizadas dentro dos limites
          do direito internacional e do interesse público.
        </p>
      </section>
    </main>
  );
}
