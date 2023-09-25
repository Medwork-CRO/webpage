import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import vigilance from "@assets/services/safety-vector.jpg";

const paragraphs0 = [
  "Enhancing Pharmacovigilance Efficacy: PV Systems and QPPV Services.",
  "We understand the criticality of establishing efficient processes that prioritize patient safety and regulatory compliance. Working closely with our clients, we offer customized solutions that align with regulatory requirements and industry standards.",
];

function Vigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory image={vigilance} title="PV SYSTEM & QPPV" />

      <div id="main-content" className="max-w-[1476px] w-full">
        <Breadcrumbs />
        <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraphs0} />

          <Title title="Our Core Strengths" />
          <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
            <li>
              <b className="mr-2">Quality System Implementation:</b>
              <span>Our foundation lies in building robust quality systems that serve as the cornerstone of your pharmacovigilance framework, ensuring adherence to stringent standards and safety measures.</span>
            </li>
            <li>
              <b className="mr-2">Customized PV Systems:</b>
              <span>Tailored to your needs, our PV Systems offer robust solutions that seamlessly integrate into your operations, ensuring compliance and meticulous safety oversight.</span>
            </li>
            <li>
              <b className="mr-2">QPPV Expertise:</b>
              <span>Our experienced QPPVs act as your vigilant guardians, ensuring adherence to local regulations and global best practices, thereby safeguarding your pharmacovigilance operations.</span>
            </li>
            <li>
              <b className="mr-2">Adaptability to Regulations:</b>
              <span>Embracing diverse regulatory landscapes, we navigate intricate requirements with ease, guaranteeing compliance while maintaining operational efficiency.</span>
            </li>
            <li>
              <b className="mr-2">Holistic Approach:</b>
              <span>Just as with our other services, our PV Systems and QPPV support are underpinned by a holistic understanding of pharmacovigilance, aligning seamlessly with your broader safety strategies.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Vigilance;
