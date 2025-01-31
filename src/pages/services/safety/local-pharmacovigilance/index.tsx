import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety.webp";

const paragraphs0 = [
  "LPPV & Local PV Services in Greece, Cyprus and Malta",
  "Experience Tailored to Your Needs: Our local pharmacovigilance (PV) services are designed to cater to a diverse range of clients, ensuring seamless compliance and risk management. Whether you're a small MAH with limited products and no local office, or a prominent international pharmaceutical company with an extensive portfolio, our expertise adapts to your specific requirements.",
];

const title = "Our Core Strengths";
const showcases = [
  {
    title: "Customized PV Systems",
    point:
      "We design and implement local PV systems that align with your operations, ensuring seamless integration and compliance with local regulations.",
  },
  {
    title: "Expert LRPPV",
    point:
      "Clients benefit from the expertise of our Local Responsible Persons for Pharmacovigilance (LRPPVs) and Local Person Responsible for Scientific Affairs who bring a comprehensive understanding of local regulations and practices. ",
  },
  {
    title: "Adaptive Systems and Databases",
    point:
      "Our experts can adapt and utilize your existing systems and databases, optimizing processes for peak efficiency and convenience.",
  },
  {
    title: "Tailored Compliance",
    point:
      "We guide clients through local regulations, providing strategies that ensure compliance while minimizing risks.",
  },
  {
    title: "Diverse Client Base",
    point:
      "Our services are tailored to a broad spectrum of clients, from small MAHs with limited products to international pharmaceutical companies with extensive portfolios.",
  },
  {
    title: "Local Expertise",
    point:
      "Clients can leverage our local affiliate's knowledge of regional regulations and practices to ensure smooth operations and timely submissions.",
  },
];

function LocalPharmacovigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory image={safety} title="Local Pharmacovigilance" />

      <div
        id="main-content"
        className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col"
      >
        <Breadcrumbs />

        <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
          <DisplayParagraphs withLead={true} paragraphs={paragraphs0} />
          <Showcasing title={title} showcases={showcases} />
        </div>
      </div>
    </div>
  );
}

export default LocalPharmacovigilance;
