import Carousel from "@/components/Carousel";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageShowCase from "@/components/ImageShowCase";
import ProvidedServices from "@/components/ProvidedServices";
import EMA from "@assets/stock-images/EMA.webp";
import happyWoman from "@assets/stock-images/happy-woman.jpg";
import pv from "@assets/team-photos/team3.jpg";

const imageShowCases = [
  {
    image: EMA,
    description: "Medwork is a European pharmacovigilance expert organization with a focus in Greece and Cyprus.",
  },
  {
    image: happyWoman,
    description: "We undertake projects for clients throughout Europe, leveraging our extensive resources and skilled team to manage complex pharmacovigilance projects.",
  },
  {
    image: pv,
    description: "We maintain the flexibility, agility, and responsiveness of a compact organization without compromising our commitment to caring for our clients and their projects.",
  },
];

const paragraphs = [
  "Medwork is a Contract Research Organization (CRO) operating in Southeast Europe, which since 2005 offers a wide range of specialized services to the pharmaceutical and medical device industries.",
  "A Contract Research Organization (CRO) is a company that provides support to the pharmaceutical, biotechnology, and medical device industries in the form of research services outsourced on a contract basis. At our CRO, we have experience and expertise with a diverse range of Therapeutic Areas and focus on innovative, technology-enabled solutions that allow our clients to focus on their core strengths.",
  "Our experienced team delivers high-touch services and technology to ensure your trial is handled with the quality and care that results in compliant outcomes and patient-focused results. From early phase studies through Phase III clinical trials, we provide a range of services to support your research needs.",
];

function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between max-w-[86rem] w-full">
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
            key={i}
          />
        ))}
      </Carousel>

      <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 text-xl text-gray-500 dark:text-gray-400 sm:px-8 py-16">
        <DisplayParagraphs paragraphs={paragraphs} />
        <ProvidedServices />
        {/* <PromoCard /> */}
      </div>
    </div>
  );
}

export default Home;
