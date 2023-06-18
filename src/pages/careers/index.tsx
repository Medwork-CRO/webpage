import ImageCategory from "@/components/ImageCategory";
import RoundedButton from "@/components/RoundedButton";
import Title from "@/components/Title";
import ai from "@assets/team-photos/ai.webp";
import ai1 from "@assets/team-photos/ai1.webp";
import ai2 from "@assets/team-photos/ai2.webp";
import ai4 from "@assets/team-photos/ai4.webp";
import team3 from "@assets/team-photos/team3.jpg";
import kariera from "@assets/companies/kariera_icon.png";
import linkedin from "@assets/companies/linkedin_icon.png";

import Image from "next/image";
import Link from "next/link";
import DisplayParagraphs from "@/components/DisplayParagraphs";

const paragraphs = [
  "We have proudly established ourselves as the leading and most esteemed Contract Research Organization (CRO) in Greece.",
  "Our commitment to making a significant difference propelled us to expand our operations to Cyprus. Currently, we have extended our sphere of influence to encompass the whole of Europe, always maintaining our dedication to high quality service.",
];

function Cosmetovigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-10">
      <ImageCategory
        textSide="right"
        image={team3}
        title="We value excellence and our people excel at that"
        description="Our team at Medwork is made up of experienced professionals who are
      passionate about improving patient outcomes. We work closely with
      the research community and pharmaceutical companies to develop
      innovative solutions that address the most pressing healthcare
      challenges."
      />

      <div className="flex max-w-[86em] flex-col items-center gap-8 whitespace-pre-line px-6 text-xl text-gray-500 dark:text-gray-400 sm:px-8">
        <Title title={"CAREERS"} />
        <DisplayParagraphs paragraphs={paragraphs} />

        <div className="mt-16 flex flex-col justify-between gap-4 text-gray-500 dark:text-gray-400 md:flex-row">
          <div className="mb-8 mr-8 border-b-2 border-r-0 border-b-gray-500 border-r-gray-500 pb-8 pr-8 md:border-b-0 md:border-r-2">
            <div className="flex w-56 flex-col">
              <span className="number mb-4 text-4xl font-bold text-cyan-500">
                90%
              </span>
              <span className="subtext text-gray-600 dark:text-gray-400">
                of employees are <strong>women</strong>
              </span>
            </div>
          </div>
          <div className="mb-8 mr-8 border-b-2 border-r-0 border-b-gray-500 border-r-gray-500 pb-8 pr-8 md:border-b-0 md:border-r-2">
            <div className="flex w-56 flex-col">
              <span className="number mb-4 text-4xl font-bold text-cyan-500">
                80%
              </span>
              <span className="subtext text-gray-600 dark:text-gray-400">
                of employees are happy after <strong>2 years</strong>
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex w-56 flex-col">
              <span className="number mb-4 text-4xl font-bold text-cyan-500">
                84%
              </span>
              <span className="subtext text-gray-600 dark:text-gray-400">
                of employees has at least one <strong>degree</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="my-12 grid grid-cols-2 gap-2 md:grid-cols-4">
          <Image src={ai} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai1} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai2} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai4} alt="AI" className="h-48 w-48 object-cover" />
        </div>

        <div className="flex flex-col gap-8 whitespace-pre-line text-2xl text-blue-800 dark:text-blue-400 xs:px-24">
          <p className="font-thin">
            Medwork values people and people value their future. There is no
            greater way to supercharge your career than to join a company that
            is growing exponentially. We are always looking for talented
            individuals to join our team. If you are interested in working with
            us, please send your CV to.
          </p>
          <p className="font-thin italic">
            <b>90%</b> of our employees have a positive trajectory in their
            career path, and excel in their field. We are proud to say that
            Medwork is a place where people can grow and thrive.
          </p>
        </div>

        <Title title={"JOB OFFERINGS"} />
        <div className="my-16 flex flex-col gap-2 whitespace-pre-line text-2xl font-thin text-cyan-600 dark:text-cyan-400 xs:px-24">
          <div>
            You can see all our open job offerings
            <div className="mt-4 flex flex-col justify-center gap-6 text-center">
              <Link
                className="flex flex-row items-center justify-center gap-4 rounded-xl border-2 border-cyan-800 bg-cyan-500 p-2 font-bold text-gray-200 hover:bg-cyan-600"
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
                className="flex flex-row items-center justify-center gap-4 rounded-xl border-2 border-cyan-800 bg-cyan-500 p-2 font-bold text-gray-200 hover:bg-cyan-600"
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
          </div>
        </div>

        <RoundedButton label="GET IN TOUCH" href="/contact-us" color="orange" />

        <div className="mt-8"></div>
      </div>
    </div>
  );
}

export default Cosmetovigilance;