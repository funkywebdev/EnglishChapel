"use client";
import { useEffect, useState } from "react";
import PageHero from "../page/PageHero";
import { Contribute, Videos } from "./Media";
import Story from "./Story";
import Tapestry, { Lightbox } from "./Tapestry";

export default function GalleryPage() {
  const [item, setItem] = useState<{ src: string; title: string } | null>(null);
  useEffect(() => {
    if (!item) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setItem(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [item]);
  const open = (src: string, title: string) => setItem({ src, title });

  return (
    <>
      <PageHero
        crumb="Media Archives"
        lines={[
          { text: "Life in His Presence." },
          { text: "Captured in Grace." },
        ]}
        body="Explore sacred moments, vibrant worship celebrations, compassionate community outreaches, and the enduring familial fellowship of English Chapel Sanctuary of Peace across Osun State and beyond."
        image="/images/landing/ma3.jpeg"
        imageAlt="Worshippers lifting their hands in prayer"
        imageClass="aspect-[640/484]"
      />
      <Story onOpen={open} />
      <Tapestry onOpen={open} />
      <Videos />
      <Contribute />
      <Lightbox item={item} onClose={() => setItem(null)} />
    </>
  );
}
