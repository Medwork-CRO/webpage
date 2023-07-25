import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export enum Theme {
  AUTO = 'auto',
  LIGHT = 'light',
  DARK = 'dark',
}

function initializeThemeSetting() {
  if (typeof window === 'undefined') {
    return Theme.AUTO;
  }

  const savedSetting = localStorage.getItem('theme');
  return savedSetting ? savedSetting as Theme : Theme.AUTO;
}

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(initializeThemeSetting);

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyPreferredTheme = () => {
      const preferredTheme = mediaQuery.matches ? Theme.DARK : Theme.LIGHT;
      root.classList.remove(mediaQuery.matches ? Theme.LIGHT : Theme.DARK);
      root.classList.add(preferredTheme);
    };

    if (theme === Theme.AUTO) {
      // Apply the preferred theme
      applyPreferredTheme();
      // Watch for changes to the media query
      mediaQuery.addEventListener('change', applyPreferredTheme);

      // Clean up event listener on unmount
      return () => mediaQuery.removeEventListener('change', applyPreferredTheme);
    }

    // If the theme is not 'AUTO', apply the selected theme
    root.classList.remove(Theme.LIGHT, Theme.DARK);
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Save the theme to localStorage whenever it changes
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <div className={`${inter.variable} bg-medwork-light font-sans dark:bg-medwork-dark`}>
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
        <div className="z-10">
          <Footer theme={theme} setTheme={setTheme} />
        </div>
        <ScrollToTopButton />
      </main>
    </div>
  );
}

export default App;
