import Carousel from "@/components/Carousel";
import CarouselImage from "@/components/CarouselImage";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ProvidedServices from "@/components/ProvidedServices";
import Statistics from "@/components/Statistics";
import happyWoman from "@assets/stock-images/happy-woman.jpg";
import office from "@assets/building/building_front.webp";
import team2 from "@assets/team-photos/team2.jpg";

const carouselTitle = "Advancing Drug Safety with Operational Excellence, Regulatory Compliance, and Adaptive Solutions";
const imageShowCases = [
    {
        image: office,
        title: undefined, // "Medwork is a European pharmacovigilance expert organization.",
    },
    {
        image: happyWoman,
        title: undefined, // "We undertake projects for clients throughout Europe, leveraging our extensive resources and skilled team to manage complex pharmacovigilance projects.",
    },
    {
        image: team2,
        title: undefined, // "We maintain the flexibility, agility, and responsiveness of a compact organization without compromising our commitment to caring for our clients and their projects.",
    },
];

const introParagraph = [
    "At Medwork, we focus on vigilance services, combining expertise with flexibility. As a CRO dedicated exclusively to safety, we remain updated with industry advancements and regulatory standards. Our team's in-depth experience in pharmacovigilance provides valuable insights and guidance, helping clients navigate regulatory challenges and establish effective safety strategies.",
    "What distinguishes us is our agility and adaptability derived from our size. This allows us to quickly adjust our approach and resources to address changing needs, offering an experience that may be challenging for larger CROs to replicate.",
];

function Home() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <Carousel title={carouselTitle} loop={true}>
                {imageShowCases.map((imageShowCase, i) => (
                    <CarouselImage
                        key={i}
                        image={imageShowCase.image}
                        title={imageShowCase.title}
                    />
                ))}
            </Carousel>

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col mt-12 gap-16">
                <div className="w-full flex flex-col items-left gap-12 px-4 sm:px-6 py-16 lg:px-0 whitespace-pre-line text-gray-500 dark:text-gray-400">
                    <DisplayParagraphs withLead={true} paragraphs={introParagraph} />
                    <ProvidedServices />
                    <Statistics Stats={[
                        { count: 15, symbol: "+", title: "years of", point: "experience" },
                        { count: 85, symbol: "+", title: "active", point: "clients" },
                        { count: 30, symbol: "+", title: "", point: "safety professionals" },
                    ]}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
