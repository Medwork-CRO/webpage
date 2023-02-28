import CompanyInfo from "@/abilities/companyInfo";
import Services from "@/abilities/services";
import CategoryTitle from "@/components/categoryTitle";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container relative mx-auto w-full max-w-7xl px-2 pb-2 xs:px-4 xs:pb-4 md:px-8 md:pb-8">
      <Head>
        <title>Medwork</title>
        <meta name="title" content="Medwork" />
        <meta name="description" content="Medwork Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsiakkas.com/" />
        <meta property="og:title" content="Medwork" />
        <meta property="og:description" content="Medwork Website" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsiakkas.com/" />
        <meta property="twitter:title" content="Medwork" />
        <meta property="twitter:description" content="Medwork Website" />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>

      <main className="flex flex-col justify-center gap-4 place-self-center backdrop-blur-3xl">
        <div>
          <div>
            <CompanyInfo />
            <div className="sticky inset-y-0 left-0 top-[4.4rem] z-50 mt-12 mb-2 text-center xs:top-10 xs:text-left">
              <CategoryTitle title={"Services"} />
            </div>
            <div>
              <Services />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
