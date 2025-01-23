import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "@/styles/globals.css";
import { Theme } from "@/types/Theme";

const URL = "https://medwork.gr";
const TITLE = "Medwork";
const DESCRIPTION =
  "Advancing Drug Safety with Operational Excellence, Regulatory Compliance, and Adaptive Solutions";
const IMAGE = "https://medwork.gr/_next/static/media/medwork-logo.0984309a.png";

function initializeThemeSetting() {
  if (typeof window === "undefined") {
    return Theme.AUTO;
  }

  const savedSetting = localStorage.getItem("theme");
  return savedSetting ? (savedSetting as Theme) : Theme.AUTO;
}

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(initializeThemeSetting);

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyPreferredTheme = () => {
      const preferredTheme = mediaQuery.matches ? Theme.DARK : Theme.LIGHT;
      root.classList.remove(mediaQuery.matches ? Theme.LIGHT : Theme.DARK);
      root.classList.add(preferredTheme);
    };

    if (theme === Theme.AUTO) {
      applyPreferredTheme();
      mediaQuery.addEventListener("change", applyPreferredTheme);

      return () =>
        mediaQuery.removeEventListener("change", applyPreferredTheme);
    }

    root.classList.remove(Theme.LIGHT, Theme.DARK);
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className={"font-sans bg-medwork-light dark:bg-medwork-dark"}>
      <Head>
        <title>Medwork</title>
        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={IMAGE} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />
        <meta property="twitter:image" content={IMAGE} />
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
        <Cookies />
        <Analytics />
        <SpeedInsights />
      </main>
    </div>
  );
}

export default App;
