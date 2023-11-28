import Carousel from "@/components/Carousel";
import CarouselImage from "@/components/CarouselImage";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ProvidedServices from "@/components/ProvidedServices";
import Statistics from "@/components/Statistics";
import Title from "@/components/Title";
import EMA from "@assets/stock-images/ema.jpg";
import happyWoman from "@assets/stock-images/happy-woman.jpg";
import team2 from "@assets/team-photos/team2.jpg";

const imageShowCases = [
    {
        image: EMA,
        title: "Medwork is a European pharmacovigilance expert organization.",
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

const leadTitle = "We Offer Drug Safety Services with Advanced Process Management, Regulatory Compliance, and Adaptive Solutions";
const leadParagraph = [
    "At Medwork, we focus on vigilance services, combining expertise with flexibility. As a CRO dedicated exclusively to safety, we remain updated with industry advancements and regulatory standards. Our team's in-depth experience in pharmacovigilance provides valuable insights and guidance, helping clients navigate regulatory challenges and establish effective safety strategies.",
    "What distinguishes us is our agility and adaptability derived from our size. This allows us to quickly adjust our approach and resources to address changing needs, offering an experience that may be challenging for larger CROs to replicate.",
];

function Home() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <Carousel loop={true}>
                {imageShowCases.map((imageShowCase, i) => (
                    <CarouselImage
                        key={i}
                        image={imageShowCase.image}
                        title={imageShowCase.title}
                    />
                ))}
            </Carousel>

            <div id="main-content" className="max-w-[1200px] w-full items-center whitespace-pre-line px-4 sm:px-6 lg:px-0 py-16">
                <div className="flex flex-col">
                    <Title title={leadTitle} />
                    <div className="my-12">
                        <DisplayParagraphs paragraphs={leadParagraph} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <ProvidedServices />
                    <Statistics Stats={[
                        { count: 15, symbol: "+", title: "years of", point: "experience" },
                        { count: 85, symbol: "+", title: "active", point: "clients" },
                        { count: 84, symbol: "+", title: "safety", point: "professionals" },
                    ]}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
