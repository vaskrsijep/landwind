import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Hero from "@/components/Hero";
import CustomerLogos from "@/components/CustomerLogos";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <Navbar/>
      <Hero/>
      <CustomerLogos/>
    </MaxWidthWrapper>
    <Features/>
      <SocialProof/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </>  
      );
    }
