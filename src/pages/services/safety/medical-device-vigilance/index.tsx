import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety-vector.jpg";

const paragraph1 = [
    "Drawing from our extensive 15-year journey in pharmacovigilance, we are proud to extend our expertise into the realm of medical device vigilance. This step represents a natural progression of our steadfast commitment to safety, as we apply the same rigorous principle and resolute mindset to medical devices that have defined our legacy in pharmacovigilance.",
];

const paragraph2 = [
    "Embrace this evolution with us, as our pharmacovigilance legacy advances to enhance medical device vigilance. It is more than a service - it is the continuation of our commitment to promoting safety and trust across the healthcare spectrum.",
];

const title = "Our Core Strengths";
const showcases = [
    {
        title: "Seamless Transition",
        point: "Our transition to medical device vigilance is not merely a new venture; it signifies an evolution of our legacy. The same dedication that has propelled our journey in pharmacovigilance now forms the foundation of our approach to medical devices.",
    },
    {
        title: "Consistent Standards",
        point: "Just as we have upheld uncompromising standards in pharmacovigilance, we apply the same level of rigour and precision to our medical device vigilance services",
    },
    {
        title: "Holistic Expertise",
        point: "Our multidisciplinary team harnesses insights from both the pharmacovigilance and medical device fields, cultivating a comprehensive approach that addresses a spectrum of safety concerns.",
    },
    {
        title: "Unified Vigilance",
        point: "Regardless of whether it&#39;s pharmaceuticals or medical devices, our paramount goal remains steadfast: to safeguard patient well-being and ensure regulatory compliance.",
    },
];

function MedicalDeviceVigilance() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="MEDICAL DEVICE VIGILANCE" />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-8 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={paragraph1} />
                    <Showcasing title={title} showcases={showcases} />
                    <DisplayParagraphs withLead={false} paragraphs={paragraph2} />
                </div>
            </div>
        </div>
    );
}

export default MedicalDeviceVigilance;
