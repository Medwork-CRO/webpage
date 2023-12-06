import { Analytics } from "@vercel/analytics/react";
import { Head, Html, Main, NextScript } from "next/document";

function Layout() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
                <Analytics />
            </body>
        </Html>
    );
}

export default Layout;