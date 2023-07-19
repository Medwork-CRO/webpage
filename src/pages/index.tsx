import Carousel from "@/components/Carousel";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import CarouselImage from "@/components/CarouselImage";
import ProvidedServices from "@/components/ProvidedServices";
import EMA from "@assets/stock-images/ema.jpg";
import happyWoman from "@assets/stock-images/happy-woman.jpg";
import pv from "@assets/team-photos/team3.jpg";

const imageShowCases = [
  {
    image: EMA,
    title: "Medwork is a European pharmacovigilance expert organization with a focus in Greece and Cyprus.",
  },
  {
    image: happyWoman,
    title: "We undertake projects for clients throughout Europe, leveraging our extensive resources and skilled team to manage complex pharmacovigilance projects.",
  },
  {
    image: pv,
    title: "We maintain the flexibility, agility, and responsiveness of a compact organization without compromising our commitment to caring for our clients and their projects.",
  },
];

const paragraphs = [
  "Medwork is a CRO specializing in Drug Safety. Since 2005, Medwork has been providing a wide range of Drug safety services to the pharmaceutical and medical device industries.",
  "At Medwork, we prioritize experience and quality, following a deliberate path characterized by small yet robust steps. This approach allows us to achieve steady growth year after year, while ensuring the satisfaction of our clients, the smooth progress of their projects, and the ongoing development and deepening of our structure as well as the relationships with our clients. We believe in taking measured and thoughtful strides rather than pursuing rapid acceleration or becoming a booming giant. Our focus is on stability, productivity, and maintaining a strong commitment to quality.",
  "We consider ourselves fortunate to have had the opportunity to work with MAHs and medical device manufacturers over the course of years and even decades, who appreciate and value this organic growth and maturity approach in all aspects of our collaboration.",
  "If you resonate with our approach, we would be delighted to establish a partnership whenever you require drug safety services of any kind!",
];

function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <Carousel loop={true}>
        {imageShowCases.map((imageShowCase, i) => (
          <CarouselImage
            image={imageShowCase.image}
            title={imageShowCase.title}
            key={i}
          />
        ))}
      </Carousel>

      <div className="max-w-[86rem] w-full">
        <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraphs} />
          <ProvidedServices />
        </div>
      </div>
    </div>
  );
}

export default Home;
