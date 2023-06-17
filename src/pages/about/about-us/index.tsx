import ImageCategory from "@/components/ImageCategory";
import Logo from "@/components/Logo";
import PromoCard from "@/components/PromoCard";
import RoundedButton from "@/components/RoundedButton";
import team0 from "@assets/team-photos/team0.jpg";

function Cosmetovigilance() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <ImageCategory
        image={team0}
        title="About Medwork"
        description="We believe in a better world when it comes to health. It is our responsibility to make it."
      />

      <div className="mx-4 mt-16 flex max-w-[86em] flex-col items-center justify-between md:mx-2">
        <div className="mb-16 flex flex-col gap-8 whitespace-pre-line text-3xl text-gray-500 xs:px-24">
          <p className="font-semibold">
            We have proudly established ourselves as the leading and most
            esteemed Contract Research Organization (CRO) in Greece.
          </p>
          <p className="">
            Our commitment to making a significant difference propelled us to
            expand our operations to Cyprus. Currently, we have extended our
            sphere of influence to encompass the whole of Europe, always
            maintaining our dedication to high quality service and respect for
            all stakeholders.
          </p>
        </div>

        <PromoCard />

        <div className="mt-8"></div>
      </div>
    </div>
  );
}

export default Cosmetovigilance;
