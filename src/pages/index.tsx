import CompanyInfo from "@/abilities/companyInfo";
import Services from "@/abilities/services";
import CategoryTitle from "@/components/categoryTitle";
import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";

const images = [
  "https://placehold.co/480x300?font=roboto&text=Slide+1",
  "https://placehold.co/480x300?font=roboto&text=Slide+2",
  "https://placehold.co/480x300?font=roboto&text=Slide+3",
  "https://placehold.co/480x300?font=roboto&text=Slide+4",
];

export default function Home() {
  return (
    <div className="container relative mx-auto w-full px-2 pb-2 xs:px-4 xs:pb-4 md:px-8 md:pb-8">
      <Head>
        <title>Medwork</title>
        <meta name="title" content="Medwork" />
        <meta name="description" content="Medwork Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medwork.gr/" />
        <meta property="og:title" content="Medwork" />
        <meta property="og:description" content="Medwork Website" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://medwork.gr/" />
        <meta property="twitter:title" content="Medwork" />
        <meta property="twitter:description" content="Medwork Website" />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>
      <main className="flex flex-col justify-center gap-4 place-self-center">
        <Carousel loop>
          {images.map((src, i) => {
            return (
              // 👇 style each individual slide.
              // relative - needed since we use the fill prop from next/image component
              // h-64 - arbitrary height
              // flex[0_0_100%]
              //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
              //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
              <div className="relative h-[734px] flex-[0_0_100%]" key={i}>
                <Image src={src} fill className="object-cover" alt="alt" />
              </div>
            );
          })}
        </Carousel>
        <CompanyInfo />
        <CategoryTitle title={"CORE SERVICES"} />
        <Services />
      </main >
    </div >
  );
}
