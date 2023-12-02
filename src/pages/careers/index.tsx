import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import DualLayerParallax from "@/components/DualLayerParallax";
import ImageCategory from "@/components/ImageCategory";
import RoundedButtonExternal, { ButtonType } from "@/components/RoundedButtonExternal";
import kariera from "@assets/companies/kariera_icon.png";
import linkedin from "@assets/companies/linkedin_icon.png";
import team3 from "@assets/teams/pv/IMG_9134.jpg";

const paragraphs = [
    "Medwork has made its mark as the top Contract Research Organization (CRO) in Greece, setting the standard for excellence.",
    "Our employees have a positive trajectory in their career path, and excel in their field. We are proud to say that Medwork is a place where people can grow and thrive.",
];

// const paragraphs2 = [
//   "Opting to join the Medwork team over further academic study provides multiple benefits and can substantially enhance your career progression.",
//   "Through hands-on experience and learning from industry professionals, you'll gain invaluable insights and skills that surpass classroom education while offering an immediate income and avoiding further academic debt.",
//   "With three years at Medwork, you'll gather extensive industry knowledge, positioning you advantageously for rapid career advancement in the ever-evolving pharmaceutical field."
// ];

function Cosmetovigilance() {
    const hrEmail = "hr@medwork.gr";

    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                textSide="right"
                image={team3}
                title="Careers"
                description=""
            />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-12 px-4 sm:px-6 lg:px-0 py-16">
                    <DisplayParagraphs withLead={true} paragraphs={paragraphs} />
                    <DualLayerParallax imageFull='/assets/image-full.png' imageBottom='/assets/image-bottom.png' text='Join the Team' />
                    <div className="my-8 flex flex-col gap-2 items-center whitespace-pre-line text-2xl font-thin text-cyan-600 dark:text-cyan-400">
                        You can see all our open job offerings
                        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-6 text-center w-full">
                            <RoundedButtonExternal
                                label={"Kariera"}
                                href={"https://www.kariera.gr/en/companies/3531"}
                                ariaLabel={"By clicking you will be taken to kariera.gr"}
                                key={"kariera"}
                                type={ButtonType.IMAGE}
                                source={kariera}
                            />
                            <RoundedButtonExternal
                                label={"LinkedIn"}
                                href={"https://www.linkedin.com/company/medwork/jobs/"}
                                ariaLabel={"By clicking you will be taken to linkedIn.gr"}
                                key={"linkedIn"}
                                type={ButtonType.IMAGE}
                                source={linkedin}
                            />
                            <RoundedButtonExternal
                                label={"Email us your CV"}
                                href={`mailto:${hrEmail}`}
                                ariaLabel={"By clicking you will be taken to compose an email to medwork hr"}
                                key={"email"}
                                type={ButtonType.ICON}
                                source={kariera}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cosmetovigilance;
