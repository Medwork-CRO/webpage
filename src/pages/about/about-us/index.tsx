import ImageCategory from "@/components/ImageCategory";
import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";
import team4 from "@assets/team-photos/team4.jpg";

function Cosmetovigilance() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <ImageCategory
        image={team4}
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

        <div className="m-2 mt-8 flex h-[26rem] transform flex-col items-center justify-center gap-6 rounded-xl bg-[#1a2188] p-6 text-center text-white sm:p-16 md:h-[32rem] lg:p-56">
          <Logo color="text-white" />
          <p className="max-w-[86em] text-2xl font-semibold sm:text-xl md:text-3xl">
            Want to learn more about Medwork?
          </p>
          <p className="text-md max-w-[86em] font-normal sm:text-xl md:text-2xl">
            We believe in harnessing science for human good. So whether you are
            a provider, drug developer, hospital, medical researcher or
            patient—we promise to work tirelessly to bring you trusted
            information to make clear, confident decisions for a healthier
            future.
          </p>
          <RoundedButton label="GET IN TOUCH" href="contact-us" color="gray" />
        </div>

        <div className="mt-8"></div>
      </div>
    </div>
  );
}

export default Cosmetovigilance;
