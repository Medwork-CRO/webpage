import office from "@assets/teams/mw/IMG_9147.jpg";
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
    "Medwork is a Contract Research Organization located in Athens which provides a wide range of specialized services to the pharmaceutical and medical device industries, including Pharmacovigilance, Materiovigilance, Cosmetovigilance and Quality Assurance services. Founded in 2005, Medwork has steadily evolved into a leading Vigilance provider in Europe, combining excellent knowledge of the pharmaceutical environment with a deep understanding of European pharmaceutical quality standards.",
    "Our services can be adapted to suit the size and scope of the project, as each project receives the same level of attention to detail and commitment in order to ensure the delivery of a high-quality outcome, within budget and within the agreed timescale.",
    "Our team consists of highly-qualified senior personnel with deep expertise in the field, as well as young, motivated associates who help us achieve our ambitions by assisting our clients to accomplish their goals, through understanding their challenges and providing targeted and effective services.",
    "Our relationships with our clients are enduring and are based on a thorough knowledge of their business; they are honoured by trust that is demonstrated in contracts that are continuously renewed year after year."
];

const paragraphs3 = [
    "Medwork is a leading pharmaceutical company, specializing in clinical, drug safety, and review services for global pharmaceutical, biotechnology, and medical device companies.",
    "Our team of experts brings a wealth of experience and a comprehensive portfolio of solutions, including clinical research support, life science consulting, R&D technology, pharmacovigilance, and IRB/IBC services. We are committed to delivering optimal outcomes for our clients trials and improving patient care.",
    "With our end-to-end global clinical services and advanced technology solutions, Medwork is dedicated to serving the needs of clinical research and patients worldwide.",
    "Our unwavering dedication, coupled with our commitment to excellence, drives us to continually innovate and provide the highest standard of service. We strive to optimize the research and development process, ensure drug safety, and facilitate efficient regulatory review, all with the ultimate goal of advancing healthcare through exceptional pharmaceutical services. Partner with Medwork for trusted expertise and a customer-centric approach in the ever-evolving pharmaceutical industry.",
];

function AboutUs() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                image={office}
                title="About us"
                description=""
            />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 lg:px-0 py-16">
                    <div className="flex flex-col gap-12">
                        {/* <Title title="Who we are" /> */}
                        <DisplayParagraphs withLead={true} paragraphs={paragraphs} />
                        {/* <PromoCard /> */}
                        <DisplayParagraphs withLead={false} paragraphs={paragraphs2} />
                        <DisplayParagraphs withLead={true} paragraphs={paragraphs3} />
                    </div>

                    <div className="flex flex-col gap-24">
                        <Title title="Leadership" />
                        <People />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
