import type { Metadata } from "next";
import About from "@/components/About";
import Beliefs from "@/components/Beliefs";
import Foundation from "@/components/Foundation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import ScrollUI from "@/components/ScrollUI";
import Visit from "@/components/Visit";

export const metadata: Metadata = {
  title: "About Us | English Chapel – Sanctuary of Peace, Osogbo District Headquarters",
  description:
    "Our story, heritage, leadership and beliefs — English Chapel Sanctuary of Peace, Osogbo District Headquarters.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Foundation />
        <Leadership />
        <Beliefs />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
