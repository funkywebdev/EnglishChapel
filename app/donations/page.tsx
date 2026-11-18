import type { Metadata } from "next";
import DonationsPage from "@/components/donations/DonationsPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollUI from "@/components/ScrollUI";

export const metadata: Metadata = {
  title: "Donations | English Chapel – Sanctuary of Peace, Osogbo District Headquarters",
  description: "Sow into the Kingdom — verified bank accounts, transparent stewardship of every seed sown and answers to common giving questions.",
};

export default function Page() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <DonationsPage />
      </main>
      <Footer />
    </>
  );
}
