
import RoundedButton from "@/components/RoundedButton";
import Carousel from "@/components/Carousel";
import CategoryTitle from "@/components/CategoryTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import img1 from "../../public/assets/img/img1.jpg";
import img2 from "../../public/assets/img/img2.jpg";
import img3 from "../../public/assets/img/img3.jpg";

const images: StaticImageData[] = [
  img1,
  img2,
  img3,
];

function ImageShowCase({ image }: { image: StaticImageData }) {
  return (
    // 👇 style each individual slide.
    // relative - needed since we use the fill prop from next/image component
    // h-64 - arbitrary height
    // flex[0_0_100%]
    //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
    //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
    <div className="relative h-[615px] flex-[0_0_100%]">
      <Image src={image} fill className="saturate-150" alt="alt" />
      <div className="absolute z-10 inset-0 bg-cyan-800 opacity-70"></div>

      <div className="absolute z-20 top-1 flex flex-col gap-8 mx-24 my-48 text-white text-center items-center justify-center">
        <CategoryTitle title={"CORE SERVICES"} />
        <span className="text-5xl md:text-2xl font-semibold">
          Medwork is a Contract Research Organization (CRO) operating in Southeast
          Europe, which since 2005 offers a wide range of specialized services to
          the pharmaceutical and medical device industries
        </span>
        <span className="text-md md:text-md">
          A Contract Research Organization (CRO) is a company that provides support to the pharmaceutical, biotechnology, and medical device industries
          in the form of research services outsourced on a contract basis. At our CRO, we have experience and expertise with a diverse range of
          Therapeutic Areas and focus on innovative, technology-enabled solutions that allow our clients to focus on their core strengths.
        </span>
        <RoundedButton label={"MORE INFO"} href={""} color={'gray'} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative w-full bg-[#f6f1eb]">
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
      <Header />
      <main className="flex flex-col justify-center gap-4 place-self-center">
        <Carousel loop>
          {images.map((image, i) =>
            <div key={i}>
              <ImageShowCase image={image} />
            </div>)}
        </Carousel>
        <div className={`flex flex-col gap-8 whitespace-pre-line px-24 py-8 text-xl text-center text-gray-500`}>
          <p className="font-semibold">
            Medwork is a Contract Research Organization (CRO) operating in Southeast
            Europe, which since 2005 offers a wide range of specialized services to
            the pharmaceutical and medical device industries
          </p>
          <p>
            A Contract Research Organization (CRO) is a company that provides support to the pharmaceutical, biotechnology,
            and medical device industries in the form of research services outsourced on a contract basis. At our CRO,
            we have experience and expertise with a diverse range of Therapeutic Areas and focus on innovative,
            technology-enabled solutions that allow our clients to focus on their core strengths.
          </p>
          <p>
            Our experienced team delivers high-touch services and technology to ensure your trial is
            handled with the quality and care that results in compliant outcomes and patient-focused results.
            From early phase studies through Phase III clinical trials, we provide a range of services to support your research needs.
          </p>
        </div>
        <CategoryTitle title={"CORE SERVICES"} />
        <Services />
      </main >
      <Footer />
    </div >
  );
}

export default Home;
