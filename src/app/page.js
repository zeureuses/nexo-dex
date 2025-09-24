import Image from "next/image";
import HeroSection from "./components/sectionsComponents/HeroSection";
import IntroductionSection from "./components/sectionsComponents/IntroductionSection";
import FeaturesSection from "./components/sectionsComponents/FeaturesSection";
import CommunitySection from "./components/sectionsComponents/CommunitySection";
import Link from "next/link";
import NavBar from "./components/NavBar";
import OptionsProducts from "./components/sectionsComponents/OptionsProducts";
import CtaSection from "./components/CtaSection";
import AppFooter from "./components/AppFooter";

export default function Home() {
  return (
    <div className="font-sans px-6 md:px-12  min-h-screen max-w-7xl mx-auto text-white">
      <main className="flex flex-col">

        <NavBar />

        <HeroSection></HeroSection>
        <IntroductionSection></IntroductionSection>
        <OptionsProducts></OptionsProducts>
        <FeaturesSection></FeaturesSection>
        {/* <CommunitySection></CommunitySection> */}
        <CtaSection />

      </main>


      <AppFooter />
    </div>
  );
}
