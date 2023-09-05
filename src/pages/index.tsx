import Carousel from "@/components/Carousel";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import CarouselImage from "@/components/CarouselImage";
import ProvidedServices from "@/components/ProvidedServices";
import EMA from "@assets/stock-images/ema.jpg";
import happyWoman from "@assets/stock-images/happy-woman.jpg";
import team2 from "@assets/team-photos/team2.jpg";
import Title from "@/components/Title";
import Counter from "@/components/Counter";

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
    image: team2,
    title: "We maintain the flexibility, agility, and responsiveness of a compact organization without compromising our commitment to caring for our clients and their projects.",
  },
];

const paragraphs = [
  "At Medwork, we focus on vigilance services, combining expertise with flexibility. As a CRO dedicated exclusively to safety, we remain updated with industry advancements and regulatory standards. Our team's in-depth experience in pharmacovigilance provides valuable insights and guidance, helping clients navigate regulatory challenges and establish effective safety strategies.",
  "What distinguishes us is our agility and adaptability derived from our size. This allows us to quickly adjust our approach and resources to address changing needs, offering an experience that may be challenging for larger CROs to replicate.",
];

function Statistics() {
  return (
    <div className="flex flex-col sm:flex-row text-center items-center justify-between gap-8 text-gray-500 dark:text-gray-400 w-full mt-24">
      <div className="flex w-56 flex-col">
        <span className="flex flex-row self-center mb-4 text-4xl font-bold text-cyan-500">
          <Counter number={15} title="+" duration={3} />
        </span>
        <span className="subtext text-gray-600 dark:text-gray-400">
          years of <strong>experience</strong>
        </span>
      </div>

      <div className="h-full px-12 sm:px-0 sm:py-12 border border-gray-500"></div>

      <div className="flex w-56 flex-col">
        <span className="flex flex-row self-center mb-4 text-4xl font-bold text-cyan-500">
          <Counter number={85} title="+" duration={3} />
        </span>
        <span className="subtext text-gray-600 dark:text-gray-400">
          active <strong>clients</strong>
        </span>
      </div>

      <div className="h-full px-12 sm:px-0 sm:py-12 border border-gray-500"></div>

      <div className="flex w-56 flex-col">
        <span className="flex flex-row self-center mb-4 text-4xl font-bold text-cyan-500">
          <Counter number={84} title="+" duration={3} />
        </span>
        <span className="subtext text-gray-600 dark:text-gray-400">
          safety <strong>professionals</strong>
        </span>
      </div>
    </div>
  )
}

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

      <div id="main-content" className="max-w-[1376px] w-full">
        <div className="flex flex-col items-center gap-12 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <Title title={"Advancing Drug Safety with Operational Excellence, Regulatory Compliance, and Adaptive Solutions"} />
          <DisplayParagraphs paragraphs={paragraphs} />
          <ProvidedServices />
          <Statistics />
        </div>
      </div>
    </div>
  );
}

export default Home;
