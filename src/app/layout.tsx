import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="antialiased bg-transparent">
        <Header />

        {/* Offset para header fixo */}
        <main className="pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
