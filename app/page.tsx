import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import SocialSection from "@/components/SocialSection";
import ChartSection from "@/components/ChartSection";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cate-dark-blue relative overflow-hidden">
      {/* Banner Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image
          src="/Pictures/CATEBANNER.png"
          alt="Background Banner"
          fill
          className="object-cover opacity-40"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cate-dark-blue/80 via-cate-dark-blue/70 to-cate-dark-blue/80" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <MainSection />
        <SocialSection />
        <ChartSection />
        <Footer />
      </div>
    </main>
  );
}
