// import Certificate from "@/Components/Certificate";
import FAQ from "@/Components/FAQ";
import FeaturedIn from "@/Components/FeaturedIn";
import FeatureSection from "@/Components/FeatureSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import HowItWorksSection from "@/Components/HowItWorksSection";
import Mission from "@/Components/Misson";
import Navigation from "@/Components/Navigation";
import TestimonialsSection from "@/Components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
      <FeaturedIn/>
      <TestimonialsSection/>
      <HowItWorksSection/>
      <Mission/>
      {/* <Certificate/> */}
      <FeatureSection/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
