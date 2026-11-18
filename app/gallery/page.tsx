import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GalleryPage from "@/components/gallery/GalleryPage";
import Navbar from "@/components/Navbar";
import ScrollUI from "@/components/ScrollUI";

export const metadata: Metadata = {
  title: "Gallery | English Chapel – Sanctuary of Peace, Osogbo District Headquarters",
  description: "Sacred moments, worship celebrations and community outreaches — the media archive of English Chapel Sanctuary of Peace, Osogbo.",
};

export default function Page() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <GalleryPage />
      </main>
      <Footer />
    </>
  );
}
