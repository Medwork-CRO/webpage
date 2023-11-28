import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety-vector.jpg";

const paragraph1 = [
    "Drawing from our extensive 15-year journey in pharmacovigilance, we proudly extend our expertise to the realm of medical device vigilance. As a natural progression of our commitment to safety, we approach medical devices with the same stringent concepts and unwavering mindset that have defined our pharmacovigilance legacy.",
];

const paragraph2 = [
    "Embrace this evolution with us, as our pharmacovigilance legacy transcends to elevate medical device vigilance. It's more than a service - it's a continuation of our commitment to fostering safety and trust across the healthcare spectrum.",
];

const title = "Our Core Strengths";
const showcases = [
    {
        title: "Seamless Transition",
        point: "Our transition to medical device vigilance is not just a new venture; it&apos;s an evolution of our legacy. The same dedication that has fueled our pharmacovigilance journey now underpins our approach to medical devices.",
    },
    {
        title: "Consistent Standards",
        point: "Just as we&apos;ve maintained uncompromising standards in pharmacovigilance, we bring the same level of rigor and precision to our medical device vigilance services.",
    },
    {
        title: "Holistic Expertise",
        point: "Our multidisciplinary team leverages insights from both pharmacovigilance and medical device fields, creating a holistic approach that addresses diverse safety concerns.",
    },
    {
        title: "Unified Vigilance",
        point: "Whether pharmaceuticals or medical devices, our overarching goal remains unchanged: to safeguard patient well-being and uphold regulatory compliance.",
    },
];

function MedicalDeviceVigilance() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="MEDICAL DEVICES VIGILANCE" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <DisplayParagraphs paragraphs={paragraph1} />
                    <Showcasing title={title} showcases={showcases} />
                    <DisplayParagraphs paragraphs={paragraph2} />
                </div>
            </div>
        </div>
    );
}

export default MedicalDeviceVigilance;
