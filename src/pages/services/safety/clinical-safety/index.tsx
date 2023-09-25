import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import safety from "@assets/services/safety-vector.jpg";

const paragraph = [
  "Navigating the realm of clinical trials safety requires diligence and expertise. While we might not boast extensive experience, our dedication to excellence remains unwavering. Discover how we bring a fresh perspective and commitment to your clinical trials safety needs.",
];

function ClinicalSafety() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory image={safety} title="CLINICAL TRIALS SAFETY" />

      <div id="main-content" className="max-w-[1476px] w-full">
        <Breadcrumbs />
        <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraph} />

          <Title title="Key Attributes" />
          <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
          <li>
            <b className="mr-2">Focused Approach:</b>
            <span>Despite our relatively young presence, our focus on clinical trials safety is steadfast. We approach each project with an eagerness to learn and a dedication to delivering results.</span>
          </li>
          <li>
            <b className="mr-2">Collaborative Adaptation:</b>
            <span>We understand the unique demands of clinical trials safety. By collaborating closely with your team, we tailor our approach to meet your specific requirements.</span>
            </li>
          <li>
            <b className="mr-2">Growing experience:</b>
            <span>With a history of clinical trial PV execution in over 10 countries, our experience is steadily growing and extending to encompass various territories.</span>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClinicalSafety;
