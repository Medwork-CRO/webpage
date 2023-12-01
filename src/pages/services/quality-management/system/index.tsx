import Breadcrumbs from "@/components/Breadcrumb";
import ImageCategory from "@/components/ImageCategory";
import Showcasing from "@/components/Showcasing";
import safety from "@assets/services/safety-vector.jpg";

const title1 = "Development, improvement and monitoring according to GCP, GVP, GDP and ISO 9001";
const showcases1 = [
    {
        title: "",
        point: "Setup and implementation of quality management systems with standardised processes, compliant to legal/regulatory requirements and applicable quality standards, and adapted to your business needs reflecting the particularities of your organization",
    },
    {
        title: "",
        point: "Review of existing quality management systems for compliance, effectiveness and efficiency",
    },
    {
        title: "",
        point: "Re-engineering of existing quality management systems to improve their compliance, effectiveness and efficiency, and to reduce the effort and resources required",
    },
    {
        title: "",
        point: "Development and review of quality management system documents",
    },
];

const title2 = "Quality Management Consulting";
const showcases2 = [
    {
        title: "",
        point: "Identification of improvement areas and development of appropriate risk-based action plans",
    },
    {
        title: "",
        point: "Consulting on individual quality-related issues",
    },
    {
        title: "",
        point: "Assumption of quality management responsibilities.",
    },
    {
        title: "",
        point: "Ongoing quality support.",
    },
    {
        title: "",
        point: "Consulting on and/or support for GCP, GVP and GDP audits/regulatory inspections (preparation and follow-up)",
    },
];

function CaseProcessing() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory image={safety} title="QUALITY MANAGEMENT SUPPORT" />

            <div id="main-content" className="max-w-[1200px] w-full">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-8 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <Showcasing title={title1} showcases={showcases1} />
                    <Showcasing title={title2} showcases={showcases2} />
                </div>
            </div>
        </div>
    );
}

export default CaseProcessing;
