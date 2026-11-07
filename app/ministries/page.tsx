import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollUI from "@/components/ScrollUI";
import Fellowships from "@/components/ministries/Fellowships";
import MinistriesHero from "@/components/ministries/Hero";
import Steps from "@/components/ministries/Steps";
import Volunteer from "@/components/ministries/Volunteer";
import Wings from "@/components/ministries/Wings";

export const metadata: Metadata = {
  title: "Ministries | English Chapel – Sanctuary of Peace, Osogbo District Headquarters",
  description: "Find your calling, grow in purpose and serve with passion — fellowships, service wings and volunteer opportunities at English Chapel, Osogbo.",
};

export default function MinistriesPage() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <MinistriesHero />
        <Fellowships />
        <Wings />
        <Steps />
        <Volunteer />
      </main>
      <Footer />
    </>
  );
}
