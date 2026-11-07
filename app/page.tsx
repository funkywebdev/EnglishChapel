import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollUI from "@/components/ScrollUI";
import Events from "@/components/landing/Events";
import Faq from "@/components/landing/Faq";
import LandingHero from "@/components/landing/Hero";
import Impact from "@/components/landing/Impact";
import Ministries from "@/components/landing/Ministries";
import Newsletter from "@/components/landing/Newsletter";
import News from "@/components/landing/News";
import Sermons from "@/components/landing/Sermons";
import Stories from "@/components/landing/Stories";
import Welcome from "@/components/landing/Welcome";

export default function Home() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <LandingHero />
        <Welcome />
        <Ministries />
        <Sermons />
        <Events />
        <News />
        <Impact />
        <Stories />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
