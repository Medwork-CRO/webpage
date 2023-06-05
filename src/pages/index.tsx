import CompanyInfo from "@/components/companyInfo";
import Services from "@/components/services";
import CategoryTitle from "@/components/CategoryTitle";
import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import CustomFooter from "@/components/Footer";
import CustomHeader from "@/components/Header";

const images = [
  "https://placehold.co/480x300?font=roboto&text=Slide+1",
  "https://placehold.co/480x300?font=roboto&text=Slide+2",
  "https://placehold.co/480x300?font=roboto&text=Slide+3",
  "https://placehold.co/480x300?font=roboto&text=Slide+4",
];

export default function Home() {
  return (
    <div className="relative w-full">
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
      <CustomHeader />
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
        <p className={`whitespace-pre-line p-2 text-xl font-semibold text-center`}>
          Medwork is a Contract Research Organization (CRO) operating in Southeast
          Europe, which since 2005 offers a wide range of specialized services to
          the pharmaceutical and medical device industries
        </p>
        <p className={`whitespace-pre-line p-2 text-xl text-center`}>
          A Contract Research Organization (CRO) is a company that provides support to the pharmaceutical, biotechnology,
          and medical device industries in the form of research services outsourced on a contract basis. At our CRO,
          we have experience and expertise with a diverse range of Therapeutic Areas and focus on innovative,
          technology-enabled solutions that allow our clients to focus on their core strengths.
        </p>
        <p className={`whitespace-pre-line p-2 text-xl text-center`}>
          Our experienced team delivers high-touch services and technology to ensure your trial is
          handled with the quality and care that results in compliant outcomes and patient-focused results.
          From early phase studies through Phase III clinical trials, we provide a range of services to support your research needs.
        </p>
        <CategoryTitle title={"CORE SERVICES"} />
        <Services />
      </main >
      <CustomFooter />
    </div >
  );
}
