"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black/60 backdrop-blur border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-14 grid gap-10 md:grid-cols-4 text-sm">

        {/* COLUNA 1 — MARCA */}
        <div>
          <h3 className="text-ekd-gold font-semibold mb-3">
            EdenKingDom Law
          </h3>
          <p className="text-ekd-gray leading-relaxed">
            Instituição internacional de auditoria jurídica,
            integridade pública, investigação forense e
            governança corporativa.
          </p>
        </div>

        {/* COLUNA 2 — JUSTIÇA & AUDITORIA */}
        <div>
          <h4 className="text-ekd-pearl font-semibold mb-3">
            Justiça & Auditoria
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/law-audition" className="text-ekd-gray hover:text-ekd-gold">
                Law Audition
              </Link>
            </li>
            <li>
              <Link href="/public-integrity" className="text-ekd-gray hover:text-ekd-gold">
                Integridade Pública
              </Link>
            </li>
            <li>
              <Link href="/certification" className="text-ekd-gray hover:text-ekd-gold">
                Certificação & Selos
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUNA 3 — INVESTIGAÇÃO & SEGURANÇA */}
        <div>
          <h4 className="text-ekd-pearl font-semibold mb-3">
            Investigação & Segurança
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/ebi" className="text-ekd-gray hover:text-ekd-gold">
                EBI — Investigação
              </Link>
            </li>
            <li>
              <Link href="/police" className="text-ekd-gray hover:text-ekd-gold">
                Police (Segurança Interna)
              </Link>
            </li>
            <li>
              <Link href="/corporate-escort" className="text-ekd-gray hover:text-ekd-gold">
                Corporate Escort
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUNA 4 — GOVERNANÇA & IA */}
        <div>
          <h4 className="text-ekd-pearl font-semibold mb-3">
            Governança & IA
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/lawer" className="text-ekd-gray hover:text-ekd-gold">
                E-Lawer (Advocacia Corporativa)
              </Link>
            </li>
            <li>
              <Link href="/ai-dashboard" className="text-ekd-gray hover:text-ekd-gold">
                Dashboard IA Jurídico
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* RODAPÉ LEGAL */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-ekd-gray">
        © {new Date().getFullYear()} EdenKingDom Corporation — E-Law.
        <br />
        Instituição privada internacional. Atua nos limites do direito
        internacional, da ética institucional e do interesse público.
      </div>
    </footer>
  );
}
