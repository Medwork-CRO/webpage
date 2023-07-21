import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} bg-[#f6f1eb] font-sans dark:bg-[#2d333b]`}>
      <Head>
        <title>Medwork</title>
        <meta name="title" content="Medwork" />
        <meta name="description" content="Medwork Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsiakkas.xyz/" />
        <meta property="og:title" content="Medwork" />
        <meta property="og:description" content="Medwork Website" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsiakkas.xyz/" />
        <meta property="twitter:title" content="Medwork" />
        <meta property="twitter:description" content="Medwork Website" />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>
      <Header />
      <main className="flex flex-col min-h-screen justify-between">
        <div className="z-20">
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
        <div className="z-10"><Footer /></div>
      </main>
    </div>
  );
}

export default App;
