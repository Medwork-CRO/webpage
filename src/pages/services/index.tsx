import Carousel from "@/components/Carousel";
import ImageShowCase from "@/components/ImageShowCase";
import ProvidedServices from "@/components/ProvidedServices";
import Title from "@/components/Title";
import img1 from "@assets/img/img1.jpg";
import img2 from "@assets/img/img2.jpg";
import img3 from "@assets/img/img3.jpg";

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
      <Carousel loop>
        {imageShowCases.map((imageShowCase, i) => (
          <ImageShowCase
            image={imageShowCase.image}
            description={imageShowCase.description}
            description2={imageShowCase.description2}
            title={imageShowCase.title}
            link={imageShowCase.link}
            key={i}
          />
        ))}
      </Carousel>
      <div className="mx-auto mt-16 flex max-w-[86em] flex-col items-center justify-between">
        <div className="mb-16 flex flex-col gap-8 whitespace-pre-line px-8 text-xl text-gray-500 xs:px-24">
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
        <div className="mt-8 mb-16">
          <ProvidedServices />
        </div>
      </div>
    </div>
  );
}

export default Home;
