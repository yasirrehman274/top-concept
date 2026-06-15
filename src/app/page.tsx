import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Overview from "./components/Overview";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Overview />
      <Services />
      <Footer />
    </>
  );
}
