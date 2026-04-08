import "@/App.css";
import { Navbar } from "./components/landing/Navbar";
import { HeroSection } from "./components/landing/HeroSection";
import { SwitchboardSection } from "./components/landing/SwitchboardSection";
import { LEDSection } from "./components/landing/LEDSection";
import { BentoShowcase } from "./components/landing/BentoShowcase";
import { BrandShowcase } from "./components/landing/BrandShowcase";
import { SocketFooter } from "./components/landing/SocketFooter";
import { CableAnimation } from "./components/landing/CableAnimation";

function App() {
  return (
    <div className="relative" data-testid="app-root">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* SVG Cable connecting sections */}
      <CableAnimation />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <HeroSection />

        {/* Section connector cable */}
        <div className="relative z-10 flex justify-center -my-3">
          <div className="w-px h-16 bg-gradient-to-b from-[#E2E8F0] to-[#0A192F]/20" />
        </div>

        <SwitchboardSection />

        <div className="relative z-10 flex justify-center -my-3">
          <div className="w-px h-16 bg-gradient-to-b from-[#0A192F]/20 to-[#0A192F]" />
        </div>

        <LEDSection />

        <div className="relative z-10 flex justify-center -my-3">
          <div className="w-px h-16 bg-gradient-to-b from-[#0A192F] to-[#E2E8F0]" />
        </div>

        <BentoShowcase />

        <BrandShowcase />

        <SocketFooter />
      </main>
    </div>
  );
}

export default App;
