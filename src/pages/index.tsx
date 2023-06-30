import Carousel from "@/components/Carousel";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageShowCase from "@/components/ImageShowCase";
import PromoCard from "@/components/PromoCard";
import ProvidedServices from "@/components/ProvidedServices";
import EMA from "@assets/stock-images/EMA.webp";
import happyWoman from "@assets/stock-images/happy-woman.jpg";
import pv from "@assets/team-photos/team1.jpg";

const imageShowCases = [
  {
    image: EMA,
    title: "Leading provider",
    description:
      "A European Pharmacovigilance Expert based in Athens with a focus in Greece and Cyprus",
    description2: "We run projects for clients all-around Europe.",
    link: `/about-us`,
  },
  {
    image: happyWoman,
    title: `Our People`,
    description: "We undertake projects for clients throughout Europe, leveraging our extensive resources and skilled team to manage complex pharmacovigilance projects.",
    description2: "",
    link: `/people`,
  },
  {
    image: pv,
    title: `Pharmacovigilance Department`,
    description: "Despite our extensive team, Medwork maintains the flexibility and responsiveness of a compact organization, demonstrating our commitment to care for our clients and their projects.",
    description2: "",
    link: `/pharmacovigilance`,
  },
];

const paragraphs = [
  "Medwork is a Contract Research Organization (CRO) operating in Southeast Europe, which since 2005 offers a wide range of specialized services to the pharmaceutical and medical device industries.",
  "A Contract Research Organization (CRO) is a company that provides support to the pharmaceutical, biotechnology, and medical device industries in the form of research services outsourced on a contract basis. At our CRO, we have experience and expertise with a diverse range of Therapeutic Areas and focus on innovative, technology-enabled solutions that allow our clients to focus on their core strengths.",
  "Our experienced team delivers high-touch services and technology to ensure your trial is handled with the quality and care that results in compliant outcomes and patient-focused results. From early phase studies through Phase III clinical trials, we provide a range of services to support your research needs.",
];

function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between">
      {/* <ImageCategory
        image={team2}
        title="A European Pharmacovigilance Expert based in Athens with a focus in Greece and Cyprus."
        description="We are a highly proficient and extensively resourced corporation specializing tackling complex pharmacovigilance projects in a compact organisation able and willing to take care of projects and clients"
      /> */}
      <Carousel loop={true}>
        {imageShowCases.map((imageShowCase, i) => (
          <ImageShowCase
            image={imageShowCase.image}
            description={imageShowCase.description}
            description2={imageShowCase.description2}
            title={imageShowCase.title}
            link={imageShowCase.link}
            key={i}
          />
        ))}
      </Carousel>

      <div className="mt-16 flex max-w-[86em] flex-col items-center gap-8 whitespace-pre-line px-6 text-xl text-gray-500 dark:text-gray-400 sm:px-8">
        <DisplayParagraphs paragraphs={paragraphs} />
        <ProvidedServices />
        <PromoCard />
      </div>
    </div>
  );
}

export default Home;
