import ImageCategory from "@/components/ImageCategory";
import Logo from "@/components/Logo";
import ProvidedServices from "@/components/ProvidedServices";
import RoundedButton from "@/components/RoundedButton";
import Title from "@/components/Title";
import team2 from "@assets/team-photos/team2.jpg";

function Home() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <div className="mx-auto flex max-w-[86em] flex-col items-center justify-between">
        <ImageCategory
          image={team2}
          title="Focused & Dedicated"
          description="Marketing Authorization Holders of medicinal products, Device Manufacturers, and Cosmetics Manufacturers rely on Medwork's expertise. They appreciate our dedication and ability to support our clients in complying with their vigilance responsibilities in Europe."
        />

        <div className="my-16 flex flex-col gap-8 whitespace-pre-line px-8 text-xl text-gray-500 xs:px-8">
          <p className="font-semibold">
            Medwork is a Contract Research Organization (CRO) operating in
            Southeast Europe, which since 2005 offers a wide range of
            specialized services to the pharmaceutical and medical device
            industries
          </p>
          <p>
            A Contract Research Organization (CRO) is a company that provides
            support to the pharmaceutical, biotechnology, and medical device
            industries in the form of research services outsourced on a contract
            basis. At our CRO, we have experience and expertise with a diverse
            range of Therapeutic Areas and focus on innovative,
            technology-enabled solutions that allow our clients to focus on
            their core strengths.
          </p>
          <p>
            Our experienced team delivers high-touch services and technology to
            ensure your trial is handled with the quality and care that results
            in compliant outcomes and patient-focused results. From early phase
            studies through Phase III clinical trials, we provide a range of
            services to support your research needs.
          </p>
        </div>
        <Title title={"CORE SERVICES"} />
        <div className="mt-8">
          <ProvidedServices />
        </div>

        <div className="m-2 mt-32 flex h-[26rem] transform flex-col items-center justify-center gap-6 rounded-xl bg-[#1a2188] p-6 text-center text-white sm:p-16 md:h-[32rem] lg:p-56">
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
      </div>
    </div>
  );
}

export default Home;
