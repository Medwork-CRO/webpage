import ImageShowCase from "@/components/ImageShowCase";
import Head from "next/head";
import img1 from "../../public/assets/img/img1.jpg";
import img2 from "../../public/assets/img/img2.jpg";
import img3 from "../../public/assets/img/img3.jpg";
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProvidedServices from "../components/ProvidedServices";

const images = [img1, img2, img3];

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
      <main className="flex flex-col justify-center gap-4 place-self-center">
        <Carousel loop>
          {images.map((image, i) => (
            <ImageShowCase image={image} key={i} />
          ))}
        </Carousel>
        <div
          className={`flex flex-col gap-8 whitespace-pre-line px-24 py-8 text-center text-xl text-gray-500`}
        >
          <p className="font-semibold">
            Medwork is a Contract Research Organization (CRO) operating in
            Southeast Europe, which since 2005 offers a wide range of
            specialized services to the pharmaceutical and medical device
            industries
          </p>
          <p>
            A Contract Research Organization (CRO) is a company that provides
            support to the pharmaceutical, biotechnology, and medical device
            industries in the form of research services outsourced on a contract
            basis. At our CRO, we have experience and expertise with a diverse
            range of Therapeutic Areas and focus on innovative,
            technology-enabled solutions that allow our clients to focus on
            their core strengths.
          </p>
          <p>
            Our experienced team delivers high-touch services and technology to
            ensure your trial is handled with the quality and care that results
            in compliant outcomes and patient-focused results. From early phase
            studies through Phase III clinical trials, we provide a range of
            services to support your research needs.
          </p>
        </div>
        <Title title={"CORE SERVICES"} />
        <ProvidedServices />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
