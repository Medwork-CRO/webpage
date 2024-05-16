import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import LeadingParagraphs from "@/components/LeadingParagraphs";
import People from "@/components/People";
import Title from "@/components/Title";
import office from "@assets/team/medwork-group-removed.webp";

const paragraphs = [
    "In a world where safety is paramount, Medwork stands out for offering a dedicated, personalized, and reliable pharmacovigilance experience.",
];

const paragraphs2 = [
    "Devoted to Vigilance",
    "Unlike full service CROs, we are exclusively dedicated to Vigilance. This singular commitment allows us to direct all our efforts, expertise, and resources toward ensuring the utmost quality in our safety services."
];

const paragraphs3 = [
    "Optimal Scale for Maximum Impact",
    "Striking the perfect balance, Medwork is large enough for specialization and expertise, yet small enough for personalized interactions. Our size enables us to host specialized teams with deep pharmacovigilance knowledge, ensuring that we are well-versed in industry standards. Simultaneously, our nimble structure allows us to provide a tailored experience to each client, adapting seamlessly to evolving customer needs.",
];

const paragraphs4 = [
    "Quality Assurance Embedded",
    "At Medwork, a quality assurance mindset is ingrained in our culture. Supported by a robust QMS and IT infrastructure, our services not only align with regulatory requirements but consistently surpass expectations. Welcome to a partnership where quality is not merely a standard but a fundamental aspect of how we conduct business.",
];

function AboutUs() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={office} title="About us" description="" />

            <div id="main-content" className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
                    <div className="flex flex-col gap-12">
                        <LeadingParagraphs withLead={true} paragraphs={paragraphs} />
                        <DisplayParagraphs withLead={true} paragraphs={paragraphs2} />
                        <DisplayParagraphs withLead={true} paragraphs={paragraphs3} />
                        <DisplayParagraphs withLead={true} paragraphs={paragraphs4} />
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
