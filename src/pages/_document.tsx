import Footer from "@/abilities/footer";
import Header from "@/abilities/header";
import { Head, Html, Main, NextScript } from "next/document";

export default function Layout() {
  return (
    <Html className="bg-gray-100" lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
