import Footer from "@/abilities/footer";
import Header from "@/abilities/header";
import { Head, Html, Main, NextScript } from "next/document";

export default function Layout() {
  return (
    <Html className="bg-white" lang="en">
      <Head />
      <body className="bg-white">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
