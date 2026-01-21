import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import DiagnosticSection from "@/components/sections/DiagnosticSection";
import DashboardPreview from "@/components/sections/DashboardPreview";
import ProgramsSection from "@/components/sections/ProgramsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DiagnosticSection />
        <DashboardPreview />
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
