import Image from "next/image";
import Link from "next/link";
import ProvidedServices from "@/components/ProvidedServices";
import Title from "@/components/Title";
import img1 from "@assets/img/img1.jpg";
import img2 from "@assets/img/img2.jpg";
import img3 from "@assets/img/img3.jpg";
import team from "@assets/img/team.jpg";
import Logo from "@/components/Logo";
import RoundedButton from "@/components/RoundedButton";

const imageShowCases = [
  {
    image: img1,
    title: "CORE SERVICES",
    description: `Medwork is a Contract Research Organization (CRO) operating in
          Southeast Europe, which since 2005 offers a wide range of specialized
          services to the pharmaceutical and medical device industries`,
    description2: `A Contract Research Organization (CRO) is a company that provides
          support to the pharmaceutical, biotechnology, and medical device
          industries in the form of research services outsourced on a contract
          basis. At our CRO, we have experience and expertise with a diverse
          range of Therapeutic Areas and focus on innovative, technology-enabled
          solutions that allow our clients to focus on their core strengths.`,
    link: `/services`,
  },
  {
    image: img2,
    title: `PHARMASOLVE`,
    description: `PharmaSolve is a global pharmaceutical company dedicated to developing,
          manufacturing and marketing innovative medicines that improve health and wellbeing.`,
    description2: `For decades, PharmaSolve has been at the forefront of medical innovation,
          pioneering breakthrough treatments and technologies that have revolutionized 
          patient care in areas such as oncology, cardiovascular diseases, and rare disorders.`,
    link: `/pharmasolve`,
  },
  {
    image: img3,
    title: `BIOHEALTH PHARMACEUTICALS`,
    description: `BioHealth Pharmaceuticals is a leading pharmaceutical organization,
          recognized for our innovative, high-quality medicines and commitment to patient health.`,
    description2: `Our diverse portfolio includes groundbreaking treatments in fields 
          such as neuroscience, immunology, and genetic diseases. We are committed to 
          driving medical advancements and delivering better health outcomes for patients.`,
    link: `/biohealth`,
  },
];

function Home() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <div className="relative hidden h-[615px] flex-[0_0_100%] md:block">
        <Image src={team} className="h-full w-full object-cover" alt="alt" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-600 to-transparent"></div>

        <div className="absolute  top-1/2 z-20 flex w-1/2 -translate-y-1/2 transform flex-col items-start justify-center gap-8 px-8 md:px-12 lg:px-24">
          <span className="text-left text-xl font-semibold italic md:text-2xl xl:text-3xl">
            We value excellence and our people excel at that
          </span>
          <span className="text-md text-left md:text-xl xl:text-2xl">
            Our team at Medwork is made up of experienced professionals who are
            passionate about improving patient outcomes. We work closely with
            the research community and pharmaceutical companies to develop
            innovative solutions that address the most pressing healthcare
            challenges.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative md:hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700"></div>
          <div className="relative z-10 float-left p-6 md:p-12">
            <div className="md:hidden">
              <Image src={team} alt="Image for mobile" layout="responsive" />
            </div>
            <div className="mt-8 md:mt-0">
              <h1 className="mb-4 text-4xl italic">
                We value excellence and our people excel at that
              </h1>
              <p className="mb-4 text-lg">
                Our team at Medwork is made up of experienced professionals who
                are passionate about improving patient outcomes. We work closely
                with the research community and pharmaceutical companies to
                develop innovative solutions that address the most pressing
                healthcare challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[86em] flex-col items-center justify-between">
        <div className="mb-16 flex flex-col gap-8 whitespace-pre-line px-8 text-xl text-gray-500 xs:px-8">
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
        <div className="m-2 mt-32 flex h-[26rem] transform flex-col items-center justify-center gap-6 rounded-xl bg-[#1a2188] p-6 text-center text-white md:h-[32rem]">
          <Logo color="text-white" />
          <p className="max-w-[86em] text-2xl font-semibold sm:text-xl md:text-3xl">
            Want to learn more about Medwork?
          </p>
          <p className="text-md max-w-[86em] font-normal  sm:text-xl md:text-2xl">
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
