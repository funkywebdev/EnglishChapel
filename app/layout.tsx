import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource-variable/montserrat";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "English Chapel | Sanctuary of Peace – Osogbo District Headquarters",
  description:
    "English Chapel Sanctuary of Peace — an apostolic haven dedicated to biblical holiness, compassionate community and Christ-centered worship across Osun State and Nigeria.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2a57",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
