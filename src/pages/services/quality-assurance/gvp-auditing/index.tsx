import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import qualityAssurance from "@assets/services/quality-assurance.webp";

const paragraphs = ["Whether it's strengthening your internal processes or ensuring compliance across external partnerships, our GVP auditing services are tailored to address the dynamic needs of the pharmaceutical industry. Our auditing offerings cover both internal and Vendor/External partner audits."];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={qualityAssurance} title="GVP AUDITING" />

            <div id="main-content" className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col">
                <Breadcrumbs />

                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
                    <DisplayParagraphs withLead={false} paragraphs={paragraphs} />
                </div>
            </div>
        </div>
    );
}

export default CaseProcessing;
