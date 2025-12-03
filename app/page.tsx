import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import SocialSection from "@/components/SocialSection";
import ChartSection from "@/components/ChartSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cate-dark-blue relative overflow-hidden">
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
