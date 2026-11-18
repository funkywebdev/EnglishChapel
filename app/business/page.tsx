import type { Metadata } from "next";
import BusinessPage from "@/components/business/BusinessPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollUI from "@/components/ScrollUI";

export const metadata: Metadata = {
  title: "Business | English Chapel – Sanctuary of Peace, Osogbo District Headquarters",
  description: "The Kingdom Marketplace — a vetted directory of church-member enterprises, the Joseph & Daniel Executive Fellowship and the Biblical Marketplace Covenant.",
};

export default function Page() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <BusinessPage />
      </main>
      <Footer />
    </>
  );
}
