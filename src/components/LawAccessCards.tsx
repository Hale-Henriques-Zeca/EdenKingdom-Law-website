"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Briefcase,
  Users,
  Brain,
  Building2,
  Gavel, 
} from "lucide-react";

export default function LawAccessCards() {
  const cards = [
    {
      title: "Law Audition",
      desc: "Auditoria jurídica independente e revisão técnica de julgamentos.",
      href: "/law-audition",
      icon: <Scale />,
      gradient: "from-[#C9A24D] via-[#F0D58C] to-[#C9A24D]",
      glow: "shadow-[0_0_30px_rgba(201,162,77,0.5)]",
      iconColor: "text-[#F0D58C]",
    },
    {
      title: "Integridade Pública",
      desc: "Defesa institucional do cidadão e do interesse público.",
      href: "/public-integrity",
      icon: <ShieldCheck />,
      gradient: "from-[#6B7280] via-[#9CA3AF] to-[#6B7280]",
      glow: "shadow-[0_0_25px_rgba(156,163,175,0.4)]",
      iconColor: "text-[#E5E7EB]",
    },
    {
      title: "EBI – Investigação",
      desc: "Investigação forense privada, internacional e sigilosa.",
      href: "/ebi",
      icon: <Briefcase />,
      gradient: "from-[#C9A24D] via-[#F0D58C] to-[#C9A24D]",
      glow: "shadow-[0_0_30px_rgba(201,162,77,0.6)]",
      iconColor: "text-[#F0D58C]",
    },

    {
  title: "Police",
  desc: "Atuação institucional, cooperação investigativa e aplicação de medidas de ordem pública.",
  href: "/police",
  icon: <Gavel />,
  gradient: "from-[#E5E7EB] via-[#FFFFFF] to-[#E5E7EB]",
  glow: "shadow-[0_0_25px_rgba(255,255,255,0.4)]",
  iconColor: "text-ekd-pearl",
},

    {
      title: "Corporate Escort",
      desc: "Proteção executiva, escolta estratégica e segurança institucional.",
      href: "/corporate-escort",
      icon: <Users />,
      gradient: "from-[#C9A24D] via-[#F0D58C] to-[#C9A24D]",
      glow: "shadow-[0_0_30px_rgba(201,162,77,0.5)]",
      iconColor: "text-[#F0D58C]",
    },
    {
      title: "E-Lawer Bureau",
      desc: "Advocacia corporativa e defesa institucional especializada.",
      href: "/lawer",
      icon: <Building2 />,
      gradient: "from-[#C9A24D] via-[#F0D58C] to-[#C9A24D]",
      glow: "shadow-[0_0_30px_rgba(201,162,77,0.5)]",
      iconColor: "text-[#F0D58C]",
    },

    {
  title: "Insurance",
  desc: "Cobertura institucional, proteção de ativos, responsabilidade corporativa e mitigação de riscos.",
  href: "/insurance",
  icon: <ShieldCheck />,
  gradient: "from-[#1F7A5F] via-[#4BE5A1] to-[#1F7A5F]",
  glow: "shadow-[0_0_30px_rgba(31,122,95,0.6)]",
  iconColor: "text-[#4BE5A1]",
},

    {
      title: "Dashboard IA Jurídico",
      desc: "Análise jurídica avançada assistida por inteligência artificial.",
      href: "/ai-dashboard",
      icon: <Brain />,
      gradient: "from-[#3F4F3C] via-[#6B8E6B] to-[#3F4F3C]",
      glow: "shadow-[0_0_30px_rgba(63,79,60,0.6)]",
      iconColor: "text-[#9AE6B4]",
    },
  ];

  return (
   <section className="w-full pb-28">
  {/* 🧩 KIT 1 — CONTAINER SEGURO (margens 15–20mm visuais) */}
  <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">

    {/* 🧩 KIT 2 — SCROLL HORIZONTAL (FORÇA HORIZONTAL) */}
    <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">

      {/* 🧩 KIT 3 — CARDS COM LARGURA FIXA E NÃO ENCOLHÍVEIS */}
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className={`relative min-w-[320px] max-w-[320px] flex-shrink-0 snap-start
            overflow-hidden rounded-2xl p-6
            border border-white/10 bg-gradient-to-b from-black/80 to-black/40
            backdrop-blur-xl ${card.glow}
            transition-all duration-700`}
        >
          {/* Overlay cinematográfico (não bloqueia clique) */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r
                       from-transparent via-white/10 to-transparent opacity-0"
            animate={{ opacity: [0, 0.25, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2 }}
          />

          {/* Ícone */}
          <motion.div
            className={`relative z-10 text-4xl mb-4 ${card.iconColor}`}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {card.icon}
          </motion.div>

          {/* Título */}
          <motion.h3
            className={`relative z-10 text-lg font-extrabold
                        bg-gradient-to-r ${card.gradient}
                        bg-clip-text text-transparent`}
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% auto" }}
          >
            {card.title}
          </motion.h3>

          {/* Descrição */}
          <p className="relative z-10 text-gray-300 text-sm mt-2 leading-relaxed">
            {card.desc}
          </p>

          {/* Botão */}
          <motion.div whileHover={{ scale: 1.08 }} className="mt-6 relative">
            <Link
              href={card.href}
              className={`relative z-10 block text-center w-full py-2
                rounded-xl font-semibold bg-gradient-to-r ${card.gradient}
                text-black hover:brightness-125 transition-all duration-500`}
            >
              Acessar
            </Link>

            <motion.div
              className="pointer-events-none absolute inset-0 rounded-xl"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(201,162,77,0.2)",
                  "0 0 25px rgba(201,162,77,0.45)",
                  "0 0 10px rgba(201,162,77,0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
