import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import RoundedButtonExternal, { ButtonType } from "@/components/RoundedButtonExternal";
import Showcasing from "@/components/Showcasing";
import careers from "@assets/services/careers.webp";

const paragraphs = [
    "Join Us in Making a Difference",
    "At Medwork we take pride in our commitment to excellence in vigilance services and we are looking for talented individuals to join our team.",
];

const paragraphs2 = [
    "Embark on an exciting journey with Medwork, where you can jump-start your career in a thriving industry with endless possibilities. We take pride in being the perfect organization for aspiring professionals entering a field with vast opportunities. Join us and let your career take off!"
];

const title = "Why Medwork?";
const showcases = [
    {
        title: "Impactful Work",
        point: "Make a difference in the lives of patients by contributing to the safety and efficacy of pharmaceutical products. Our team plays a crucial role in identifying, assessing, and minimizing risks associated with medications."
    },
    {
        title: "Collaborative Culture",
        point: "Join a team of diverse and talented individuals who collaborate seamlessly to achieve common goals. We foster an inclusive work environment that encourages open communication and mutual respect."
    },
    {
        title: "Continuous Learning Opportunities",
        point: "We invest in our employee's growth and development. Take advantage of continuous learning opportunities, training programs, and mentorship to advance your career in the rapidly evolving field of drug safety."
    },
    {
        title: "Client-Centric Approach",
        point: "Our success is built on understanding our client's unique needs. Join a company that prioritizes client satisfaction and be a part of a team that goes the extra mile to deliver exceptional services."
    },
];

const title2 = "Why Choose Medwork?";
const showcases2 = [
    {
        title: "Investing in Your Growth",
        point: "We believe in the power of continuous learning and understand the importance of investing in the next generation. Whether you're a recent graduate or someone exploring new horizons, we've got robust training programs to ensure you're well-prepared for the exciting journey ahead."
    },
    {
        title: "Prospects for Professional Development",
        point: "We offer a dynamic environment that encourages innovation, creativity, and personal growth. Our commitment to your success extends beyond your initial role, providing clear pathways for professional development as you shape your career with us."
    },
    {
        title: "A Vibrant Community of Young Professionals",
        point: "Join a company that thrives on the energy and enthusiasm of its young workforce. At Medwork you'll be surrounded by like-minded individuals who share a passion for excellence and making a difference. Collaborate, connect, and celebrate  together in a vibrant community that values fresh perspectives."
    },
    {
        title: "Learn from the Best in the Field",
        point: "At Medwork we believe in learning from the best to become the best. Join our team and become part of the leading pharmacovigilance service provider in Greece."
    },
];

function Careers() {
    const hrEmail = "hr@medwork.gr";

    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                textSide="right"
                image={careers}
                title="Careers"
                description=""
            />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 lg:px-0 py-16">
                    <DisplayParagraphs withLead={true} paragraphs={paragraphs} />
                    <Showcasing title={title} showcases={showcases} />
                    {/* <DualLayerParallax imageFull='/assets/image-full.png' imageBottom='/assets/image-bottom.png' text='Join the Team' /> */}
                    <div className="flex flex-col whitespace-pre-line text-2xl font-thin text-blue-600 dark:text-blue-400">
                        <div className="my-8 flex flex-col gap-6 items-center">
                        You can see all our open job offerings
                            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-6 text-center w-full">
                                <RoundedButtonExternal
                                    label={"Kariera"}
                                    href={"https://www.kariera.gr/en/companies/3531"}
                                    ariaLabel={"By clicking you will be taken to kariera.gr"}
                                    type={ButtonType.KARIERA}
                                />
                                <RoundedButtonExternal
                                    label={"LinkedIn"}
                                    href={"https://www.linkedin.com/company/medwork/jobs/"}
                                    ariaLabel={"By clicking you will be taken to linkedIn.gr"}
                                    type={ButtonType.LINKEDIN}
                                />
                            </div>
                        </div>
                        <div className="my-8 flex flex-col gap-6 items-center">
                        You can always send us your CV, even if there is no open job offering that suits you
                            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-6 text-center w-full">
                                <RoundedButtonExternal
                                    label={"Email us your CV"}
                                    href={`mailto:${hrEmail}`}
                                    ariaLabel={"By clicking you will be taken to compose an email to medwork hr"}
                                    type={ButtonType.EMAIL}
                                />
                            </div>
                        </div>
                    </div>
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs2} />
                    <Showcasing title={title2} showcases={showcases2} />
                </div>
            </div>
        </div>
    );
}

export default Careers;
