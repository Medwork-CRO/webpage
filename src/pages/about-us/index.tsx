import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import PromoCard from "@/components/PromoCard";
import team0 from "@assets/team-photos/team0.jpg";

const paragraphs = [
  "We have proudly established ourselves as the leading and most esteemed Contract Research Organization (CRO) in Greece.",
  "Our commitment to making a significant difference propelled us to expand our operations to Cyprus. Currently, we have extended our sphere of influence to encompass the whole of Europe, always maintaining our dedication to high quality service and respect for all stakeholders.",
];

function Cosmetovigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between">
      <ImageCategory
        image={team0}
        title="About Medwork"
        description="We believe in a better world when it comes to health. It is our responsibility to make it."
      />

      <div className="flex max-w-[86rem] flex-col items-center gap-6 whitespace-pre-line px-4 text-xl text-gray-500 dark:text-gray-400 sm:px-8 py-16">
        <DisplayParagraphs paragraphs={paragraphs} />
        <PromoCard />
      </div>
    </div>
  );
}

export default Cosmetovigilance;
