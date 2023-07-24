import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, we check if the system prefers dark mode, and if
  // the user has a saved preference in localStorage.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const memoryMode = localStorage.getItem('darkMode');
    console.log('memoryMode :>> ', memoryMode);
    const savedMode = memoryMode ? JSON.parse(memoryMode) : null;
    console.log('savedMode :>> ', savedMode);
    if (typeof savedMode === 'boolean') {
      setDarkMode(savedMode);
    } else {
      setDarkMode(mediaQuery.matches);
    }

    const handler = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Clean up event listener on unmount
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? 'light' : 'dark');
    root.classList.add(darkMode ? 'dark' : 'light');
    // Save the mode to localStorage whenever it changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

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
        <div className="z-10"><Footer darkMode={darkMode} setDarkMode={setDarkMode} /></div>
      </main>
    </div>
  );
}

export default App;
