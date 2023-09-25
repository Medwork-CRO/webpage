import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import safety from "@assets/services/safety-vector.jpg";

const paragraph1 = [
  "Global MLM",
  "Unlock unparalleled pharmacovigilance insights with our Global Literature Monitoring service. Backed by a reservoir of strengths, we redefine safety assessment with our deep expertise and client-centric approach.",
];

const paragraph2 = [
  "Local MLM",
  "Elevate your pharmacovigilance strategy with our exceptional Local Literature Monitoring services. Our process ensures accuracy and thoroughness in identifying crucial safety information.",
];

function GlobalAndLocalLiteratureMonitoring() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory image={safety} title="GLOBAL AND LOCAL LITERATURE MONITORING" />

      <div id="main-content" className="max-w-[1476px] w-full">
        <Breadcrumbs />
        <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraph1} />

          <Title title="Key Attributes" />
          <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
            <li>
              <b className="mr-2">Profound Expertise:</b>
              <span>With a wealth of experience, our team possesses an intricate understanding of global literature monitoring, ensuring meticulous scrutiny of safety data.</span>
            </li>
            <li>
              <b className="mr-2">Tailored Adaptability:</b>
              <span>We mold our service to your needs. Whether it&apos;s the scope, depth, or specific requirements, our adaptable approach aligns seamlessly with your preferences.</span>
            </li>
            <li>
              <b className="mr-2">SOP Alignment:</b>
              <span>We integrate seamlessly with your Standard Operating Procedures (SOPs), assuring compliance and a consistent approach in line with your established protocols.</span>
            </li>
            <li>
              <b className="mr-2">Medical Doctor Engagement:</b>
              <span>Our service is elevated by the involvement of Medical Doctors, experts who provide in-depth medical insights for a comprehensive safety assessment.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraph2} />

          <Title title="Key Attributes" />
          <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
            <li>
              <b className="mr-2">Proven Expertise:</b>
              <span>Benefit from a mature process refined over 15 years, ensuring accuracy and reliability in every review.</span>
            </li>
            <li>
              <b className="mr-2">Medical Doctor Review:</b>
              <span>Exclusively performed by our trained and experienced Medical Doctors, guaranteeing a meticulous and informed assessment.</span>
            </li>
            <li>
              <b className="mr-2">Comprehensive Coverage:</b>
              <span>Beyond medical journals, we scrutinize published conference proceedings – a primary source of safety information – amplifying the scope of our assessment.</span>
            </li>
            <li>
              <b className="mr-2">Thorough Examination:</b>
              <span>Our review is word-by-word, cover-by-cover, leaving no stone unturned and ensuring no detail is missed.</span>
            </li>
            <li>
              <b className="mr-2">Monthly Quality Checks:</b>
              <span>Regular Quality Control evaluations, including the performance assessment of our Reviewers, underscore our commitment to excellence.</span>
            </li>
            <li>
              <b className="mr-2">Extensive Trust:</b>
              <span>Over 70 MAHs entrust us with the screening of more than 1,000 APIs, attesting to the reliability of our service.</span>
            </li>
            <li>
              <b className="mr-2">Holistic Recording:</b>
              <span>We record all safety information identified for all pharmaceutical products, allowing for comprehensive retrospective reviews.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GlobalAndLocalLiteratureMonitoring;
