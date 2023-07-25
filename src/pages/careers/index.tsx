import Breadcrumbs from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import DualLayerParallax from "@/components/DualLayerParallax";
import ImageCategory from "@/components/ImageCategory";
import kariera from "@assets/companies/kariera_icon.png";
import linkedin from "@assets/companies/linkedin_icon.png";
import team3 from "@assets/team-photos/team3.jpg";
import Image from "next/image";
import Link from "next/link";

const paragraphs = [
  "Medwork has made its mark as the top Contract Research Organization (CRO) in Greece, setting the standard for excellence.",
  "Our employees have a positive trajectory in their career path, and excel in their field. We are proud to say that Medwork is a place where people can grow and thrive.",
];

// const paragraphs2 = [
//   "Opting to join the Medwork team over further academic study provides multiple benefits and can substantially enhance your career progression.",
//   "Through hands-on experience and learning from industry professionals, you'll gain invaluable insights and skills that surpass classroom education while offering an immediate income and avoiding further academic debt.",
//   "With three years at Medwork, you'll gather extensive industry knowledge, positioning you advantageously for rapid career advancement in the ever-evolving pharmaceutical field."
// ];

function Statistics() {
  return (
    <div className="flex flex-col justify-between gap-8 text-gray-500 dark:text-gray-400 md:flex-row w-full items-center">
      <div>
        <div className="flex w-56 flex-col">
          <span className="flex flex-row self-center mb-4 text-4xl font-bold text-cyan-500">
            <Counter number={90} title="" duration={3} />
            <span>%</span>
          </span>
          <span className="subtext text-gray-600 dark:text-gray-400">
            of employees are <strong>women</strong>
          </span>
        </div>
      </div>
      <div className="h-full px-12 md:px-0 md:py-12 border border-gray-500"></div>
      <div>
        <div className="flex w-56 flex-col">
          <span className="flex flex-row self-center mb-4 text-4xl font-bold text-cyan-500">
            <Counter number={80} title="" duration={3} />
            <span>%</span>
          </span>
          <span className="subtext text-gray-600 dark:text-gray-400">
            of employees are happy after <strong>2 years</strong>
          </span>
        </div>
      </div>
      <div className="h-full px-12 md:px-0 md:py-12 border border-gray-500"></div>
      <div>
        <div className="flex w-56 flex-col">
          <span className="flex flex-row self-center mb-4 text-4xl font-bold text-cyan-500">
            <Counter number={84} title="" duration={3} />
            <span>%</span>
          </span>
          <span className="subtext text-gray-600 dark:text-gray-400">
            of employees has at least one <strong>degree</strong>
          </span>
        </div>
      </div>
    </div>
  )
}

function Cosmetovigilance() {
  const recruitmentEmail = "recruitment@medwork.gr";

  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory
        textSide="right"
        image={team3}
        title="We value excellence"
        description="Our team at Medwork is made up of experienced professionals who are
       passionate about improving patient outcomes."
      />

      <div className="max-w-[86rem] w-full">
        <Breadcrumbs />
        <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16 text-center w-full">
          <Statistics />

          <DisplayParagraphs paragraphs={paragraphs} />

          <DualLayerParallax imageFull='/assets/image-full.png' imageBottom='/assets/image-bottom.png' text='Join the Team' />

          {/* <div className="flex flex-col gap-8 whitespace-pre-line text-2xl p-8 border-2 rounded-lg border-gray-400 shadow-xl w-full">
          <p className="font-thin italic">
            {paragraphs2[0]}
          </p>
          <p className="font-thin italic">
            {paragraphs2[1]}
          </p>
          <p className="font-thin italic">
            {paragraphs2[2]}
          </p>
        </div> */}

          {/* <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <Image src={ai} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai1} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai2} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai4} alt="AI" className="h-48 w-48 object-cover" />
        </div> */}

          <div className="my-8 flex flex-col gap-2 items-center whitespace-pre-line text-2xl font-thin text-cyan-600 dark:text-cyan-400">
            You can see all our open job offerings
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-6 text-center w-full">
              <Link
                className="flex flex-row items-center justify-center gap-4
        cursor-pointer text-medwork-light dark:text-medwork-dark
        py-2.5 px-4 text-sm sm:text-md md:text-lg text-center font-semibold w-[200px] rounded-full
        bg-cyan-400 hover:bg-cyan-600
        transition duration-100 ease-in focus:outline-none"
                aria-label={`By clicking you will be taken to kariera.gr`}
                key={"kariera"}
                href={"https://www.kariera.gr/en/companies/3531"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={kariera}
                  alt="kariera"
                  className="h-8 w-8 object-cover"
                />
                {"Kariera"}
              </Link>
              <Link
                className="flex flex-row items-center justify-center gap-4
        cursor-pointer text-medwork-light dark:text-medwork-dark
        py-2.5 px-4 text-sm sm:text-md md:text-lg text-center font-semibold w-[200px] rounded-full
        bg-cyan-400 hover:bg-cyan-600
        transition duration-100 ease-in focus:outline-none"
                aria-label={`By clicking you will be taken to linkedIn.gr`}
                key={"linkedIn"}
                href={"https://www.linkedin.com/company/medwork/jobs/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className="h-8 w-8 object-cover"
                />
                {"LinkedIn"}
              </Link>
            </div>
            <div className="flex flex-row justify-center mt-8 text-lg">
              <Link
                className="italic"
                aria-label={`By clicking you will be taken to the email ${recruitmentEmail}`}
                href={`mailto:${recruitmentEmail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Or email us your CV at {recruitmentEmail}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cosmetovigilance;
