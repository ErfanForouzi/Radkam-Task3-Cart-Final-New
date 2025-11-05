import "./globals.css";
import Providers from "@/providers";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header/header";
import { Geist, Geist_Mono } from "next/font/google";
import ReduxProvider from "@/providers/redux";
import StoreProvider from "@/providers/store-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cart Project❤️",
  description: "Cart Project With Ts|Redux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   min-h-screen grid grid-rows-[80px_1fr_80px]`}
      >
        <ReduxProvider>
          <Header />
          <main
            className="flex-1 bg-gray-700
          "
          >
            <ToastContainer
              rtl={false}
              theme="colored"
              position="bottom-left"
              pauseOnFocusLoss={false}
            />
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
