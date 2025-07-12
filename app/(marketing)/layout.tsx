import { Header } from "@/components/header";
import Footer from "@/components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
