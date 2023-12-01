import team0 from "@assets/team-photos/team0.jpg";
import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import People from "@/components/People";
import Title from "@/components/Title";

const paragraphs = [
    "We have proudly established ourselves as the leading and most esteemed Contract Research Organization (CRO) in Greece.",
    "Our commitment to making a significant difference propelled us to expand our operations to Cyprus. Currently, we have extended our sphere of influence to encompass the whole of Europe, always maintaining our dedication to high quality service and respect for all stakeholders.",
];

const paragraphs2 = [
    "Medwork is a leading pharmaceutical company, specializing in clinical, drug safety, and review services for global pharmaceutical, biotechnology, and medical device companies.",
    "Our team of experts brings a wealth of experience and a comprehensive portfolio of solutions, including clinical research support, life science consulting, R&D technology, pharmacovigilance, and IRB/IBC services. We are committed to delivering optimal outcomes for our clients trials and improving patient care.",
    "With our end-to-end global clinical services and advanced technology solutions, Medwork is dedicated to serving the needs of clinical research and patients worldwide.",
    "Our unwavering dedication, coupled with our commitment to excellence, drives us to continually innovate and provide the highest standard of service. We strive to optimize the research and development process, ensure drug safety, and facilitate efficient regulatory review, all with the ultimate goal of advancing healthcare through exceptional pharmaceutical services. Partner with Medwork for trusted expertise and a customer-centric approach in the ever-evolving pharmaceutical industry.",
];

function AboutUs() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                image={team0}
                title="About Medwork"
                description=""
            />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col mt-12 gap-16">
                <Breadcrumbs />

                <div className="w-full flex flex-col items-left gap-12 px-4 sm:px-6 py-16 lg:px-0 whitespace-pre-line text-gray-500 dark:text-gray-400">
                    <Title title="Who we are" />
                    <DisplayParagraphs withLead={true} paragraphs={paragraphs} />
                    {/* <PromoCard /> */}
                    <DisplayParagraphs withLead={true} paragraphs={paragraphs2} />
                </div>

                <div className="w-full flex flex-col items-left gap-12 px-4 sm:px-6 py-16 lg:px-0 whitespace-pre-line text-gray-500 dark:text-gray-400">
                    <Title title="Leadership" />
                    <People />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
