import Carousel from "@/components/Carousel";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCarousel from "@/components/ImageCarousel";
import ProvidedServices from "@/components/ProvidedServices";
import Statistics from "@/components/Statistics";
import image1 from "@assets/stock-images/corporate-meeting.webp";
import image2 from "@assets/stock-images/abstract.webp";
import image3 from "@assets/stock-images/group-meeting.webp";

const carouselTitle =
  "Advancing Drug Safety with Operational Excellence, Regulatory Compliance, and Adaptive Solutions";
const imageShowCases = [
  {
    image: image1,
    title: undefined, // "Medwork is a European pharmacovigilance expert organization.",
  },
  {
    image: image2,
    title: undefined, // "Medwork is a European pharmacovigilance expert organization.",
  },
  {
    image: image3,
    title: undefined, // "Medwork is a European pharmacovigilance expert organization.",
  },
  // {
  //     image: image4,
  //     title: undefined, // "Medwork is a European pharmacovigilance expert organization.",
  // },
  // {
  //     image: office,
  //     title: undefined, // "Medwork is a European pharmacovigilance expert organization.",
  // },
  // {
  //     image: team2,
  //     title: undefined, // "We maintain the flexibility, agility, and responsiveness of a compact organization without compromising our commitment to caring for our clients and their projects.",
  // },
];

const statistics = [
  { count: 20, symbol: "+", title: "years of", point: "experience" },
  { count: 85, symbol: "+", title: "active", point: "clients" },
  { count: 30, symbol: "+", title: "", point: "safety professionals" },
];

const introParagraph = [
  "At Medwork, we focus on vigilance services, combining expertise with flexibility. As a Contract Research Organization (CRO) dedicated exclusively to safety, we remain updated with industry advancements and regulatory standards. Our team's in-depth experience in pharmacovigilance provides valuable insights and guidance, helping clients navigate regulatory challenges and establish effective safety strategies.",
  "What distinguishes us from other CROs is our agility and adaptability, derived from our size. This allows us to quickly adjust our approach and resources to address changing needs, offering an experience that may be challenging for larger CROs to replicate.",
  "Our organization is certified in accordance with ISO 9001 and ISO 27001 standards, underscoring our dedication to quality management and information security.",
];

function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <Carousel title={carouselTitle} loop={true}>
        {imageShowCases.map((imageShowCase, i) => (
          <ImageCarousel
            key={i}
            image={imageShowCase.image}
            title={imageShowCase.title}
          />
        ))}
      </Carousel>

      <div
        id="main-content"
        className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col"
      >
        <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
          <DisplayParagraphs withLead={false} paragraphs={introParagraph} />
          <Statistics Stats={statistics} />
          <ProvidedServices />
        </div>
      </div>
    </div>
  );
}

export default Home;
