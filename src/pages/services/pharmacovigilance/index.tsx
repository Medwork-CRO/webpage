import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import pharmacovigilance from "@assets/services/pharmacovigilance.jpg";

const paragraphs = [
  "We have an extensive Pharmacovigilance Department composed of a team of 21 pharmacovigilance professionals and four medical advisors.",
  "Our clients range from small local companies to large international corporations. Currently [Dec 2021 data], we have over 117 active contracts with more than 77 clients relating to pharmacovigilance activities.",
  "Our services may be fully customized to cover all of a Marketing Authorization Holder&apos;s responsibilities related to drug safety."
];

function Pharmacovigilance() {
  return (
    <div className="mx-auto my-8 flex flex-col items-center justify-between gap-10">
      <ImageCategory
        image={pharmacovigilance}
        title="Pharmacovigilance"
        description="Compliance with pharmacovigilance requirements is becoming an increasing challenge for pharmaceutical companies worldwide. In this very demanding environment, Medwork offers a reliable solution for every need related to drug safety."
      />

      <div className="flex max-w-[86em] flex-col items-center gap-8 whitespace-pre-line px-6 text-xl text-gray-500 dark:text-gray-400 sm:px-8">
        <DisplayParagraphs paragraphs={paragraphs} />
      </div>
    </div>
  );
}

export default Pharmacovigilance;
