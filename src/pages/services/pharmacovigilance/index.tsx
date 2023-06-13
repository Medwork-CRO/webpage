import ImageCategory from "@/components/ImageCategory";
import pharmacovigilance from "@assets/services/pharmacovigilance.jpg";

function Pharmacovigilance() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <ImageCategory
        image={pharmacovigilance}
        title="Pharmacovigilance"
        description="Compliance with pharmacovigilance requirements is becoming an increasing challenge for pharmaceutical companies worldwide. In this very demanding environment, Medwork offers a reliable solution for every need related to drug safety."
      />

      <div className="mx-auto flex max-w-[86em] flex-col items-center justify-between">
        <div className="mb-16 flex flex-col gap-8 whitespace-pre-line px-8 text-xl text-gray-500 xs:px-24">
          <p className="font-semibold">
            We have an extensive Pharmacovigilance Department composed of a team
            of 21 pharmacovigilance professionals and four medical advisors.
          </p>
          <p>
            Our clients range from small local companies to large international
            corporations. Currently [Dec 2021 data], we have over 117 active
            contracts with more than 77 clients relating to pharmacovigilance
            activities.
          </p>
          <p>
            Our services may be fully customized to cover all of a Marketing
            Authorization Holder&apos;s responsibilities related to drug safety.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pharmacovigilance;
