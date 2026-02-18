import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StoreProvider } from "@/context/store-context";
import { PwaRegister } from "@/components/pwa-register";

export const metadata: Metadata = {
  title: "Momzart | Premium Handmade Candles",
  description: "Premium handmade candle ecommerce experience",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <PwaRegister />
          <Navbar />
          <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-8">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
