import ImageCategory from "@/components/ImageCategory";
import PromoCard from "@/components/PromoCard";
import ProvidedServices from "@/components/ProvidedServices";
import team2 from "@assets/team-photos/team2.jpg";

function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-10">
      <ImageCategory
        image={team2}
        title="A European Pharmacovigilance Expert based in Athens with a focus in Greece and Cyprus."
        description="We are a highly proficient and extensively resourced corporation specializing tackling complex pharmacovigilance projects in a compact organisation able and willing to take care of projects and clients"
      />

      <div className="flex max-w-[86em] flex-col items-center gap-8 text-gray-500">
        <div className="flex flex-col gap-8 whitespace-pre-line px-4 text-xl text-gray-500 xs:px-8 sm:text-2xl md:text-3xl">
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

        <ProvidedServices />

        <PromoCard />
      </div>
    </div>
  );
}

export default Home;
