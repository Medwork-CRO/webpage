import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { THEME } from "@/types/Theme";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

function initializeThemeSetting() {
    if (typeof window === "undefined") {
        return THEME.AUTO;
    }

    const savedSetting = localStorage.getItem("theme");
    return savedSetting ? savedSetting as THEME : THEME.AUTO;
}

function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(initializeThemeSetting);

    useEffect(() => {
        const root = window.document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyPreferredTheme = () => {
            const preferredTheme = mediaQuery.matches ? THEME.DARK : THEME.LIGHT;
            root.classList.remove(mediaQuery.matches ? THEME.LIGHT : THEME.DARK);
            root.classList.add(preferredTheme);
        };

        if (theme === THEME.AUTO) {
            // Apply the preferred theme
            applyPreferredTheme();
            // Watch for changes to the media query
            mediaQuery.addEventListener("change", applyPreferredTheme);

            // Clean up event listener on unmount
            return () => mediaQuery.removeEventListener("change", applyPreferredTheme);
        }

        // If the theme is not 'AUTO', apply the selected theme
        root.classList.remove(THEME.LIGHT, THEME.DARK);
        root.classList.add(theme);
    }, [theme]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Save the theme to localStorage whenever it changes
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return (
        <div className={"font-sans bg-medwork-light dark:bg-medwork-dark"}>
            <Head>
                <title>Medwork</title>
                <meta name="title" content="Medwork" />
                <meta name="description" content="Medwork Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://medwork.gr/" />
                <meta property="og:title" content="Medwork" />
                <meta property="og:description" content="Medwork Website" />
                <meta
                    property="og:image"
                    content="https://medwork.gr/_next/static/media/medwork-logo.0984309a.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://medwork.gr/" />
                <meta property="twitter:title" content="Medwork" />
                <meta property="twitter:description" content="Medwork Website" />
                <meta
                    property="twitter:image"
                    content="https://medwork.gr/_next/static/media/medwork-logo.0984309a.png"
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
                <SpeedInsights/>
            </main>
        </div>
    );
}

export default App;
