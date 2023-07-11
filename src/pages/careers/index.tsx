import Breadcrumbs from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import kariera from "@assets/companies/kariera_icon.png";
import linkedin from "@assets/companies/linkedin_icon.png";
import ai from "@assets/team-photos/ai.webp";
import ai1 from "@assets/team-photos/ai1.webp";
import ai2 from "@assets/team-photos/ai2.webp";
import ai4 from "@assets/team-photos/ai4.webp";
import team3 from "@assets/team-photos/team3.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from 'react-icons/fa';

const paragraphs = [
  "Medwork has made its mark as the top Contract Research Organization (CRO) in Greece, setting the standard for excellence.",
  "Our employees have a positive trajectory in their career path, and excel in their field. We are proud to say that Medwork is a place where people can grow and thrive.",
];

const paragraphs2 = [
  "Opting to join the Medwork team over further academic study provides multiple benefits and can substantially enhance your career progression.",
  "Through hands-on experience and learning from industry professionals, you'll gain invaluable insights and skills that surpass classroom education while offering an immediate income and avoiding further academic debt.",
  "With three years at Medwork, you'll gather extensive industry knowledge, positioning you advantageously for rapid career advancement in the ever-evolving pharmaceutical field."
];

function Cosmetovigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between max-w-[86rem] w-full">
      <Breadcrumbs
        items={[
          {
            label: (
              <FaHome size={18} />
            ),
            path: "/",
          },
          {
            label: "Careers",
            path: "/careers",
          },
        ]}
      />
      <ImageCategory
        textSide="right"
        image={team3}
        title="We value excellence and our people excel at that"
        description="Our team at Medwork is made up of experienced professionals who are
      passionate about improving patient outcomes."
      />

      <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
        <DisplayParagraphs paragraphs={paragraphs} />

        <div className="mt-16 flex flex-col justify-between gap-4 text-gray-500 dark:text-gray-400 md:flex-row">
          <div className="mb-8 mr-8 border-b-2 border-r-0 border-b-gray-500 border-r-gray-500 pb-8 pr-8 md:border-b-0 md:border-r-2">
            <div className="flex w-56 flex-col">
              <span className="number mb-4 text-4xl font-bold text-cyan-500 flex flex-row">
                <Counter number={90} title="" duration={3} />
                <span>%</span>
              </span>
              <span className="subtext text-gray-600 dark:text-gray-400">
                of employees are <strong>women</strong>
              </span>
            </div>
          </div>
          <div className="mb-8 mr-8 border-b-2 border-r-0 border-b-gray-500 border-r-gray-500 pb-8 pr-8 md:border-b-0 md:border-r-2">
            <div className="flex w-56 flex-col">
              <span className="number mb-4 text-4xl font-bold text-cyan-500 flex flex-row">
                <Counter number={80} title="" duration={3} />
                <span>%</span>
              </span>
              <span className="subtext text-gray-600 dark:text-gray-400">
                of employees are happy after <strong>2 years</strong>
              </span>
            </div>
          </div>
          <div>
            <div className="flex w-56 flex-col">
              <span className="number mb-4 text-4xl font-bold text-cyan-500 flex flex-row">
                <Counter number={84} title="" duration={3} />
                <span>%</span>
              </span>
              <span className="subtext text-gray-600 dark:text-gray-400">
                of employees has at least one <strong>degree</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="my-12 grid grid-cols-2 gap-2 md:grid-cols-4 w-full max-w-[50rem]">
          <Image src={ai} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai1} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai2} alt="AI" className="h-48 w-48 object-cover" />
          <Image src={ai4} alt="AI" className="h-48 w-48 object-cover" />
        </div>

        <div className="flex flex-col gap-8 whitespace-pre-line text-2xl p-8 border-2 rounded-lg border-gray-400 shadow-xl w-full max-w-[50rem]">
          <p className="font-thin italic">
            {paragraphs2[0]}
          </p>
          <p className="font-thin italic">
            {paragraphs2[1]}
          </p>
          <p className="font-thin italic">
            {paragraphs2[2]}
          </p>
        </div>

        <div className="my-16 flex flex-col gap-2 whitespace-pre-line text-2xl font-thin text-cyan-600 dark:text-cyan-400">
          <div>
            You can see all our open job offerings
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-6 text-center w-full">
              <Link
                className="text-[#f6f1eb] flex flex-row items-center justify-center gap-4
                rounded-full bg-cyan-400 px-6 py-2.5 font-bold hover:bg-green-400 dark:text-[#2d333b]
                 border-2 border-transparent hover:border-[#2d333b] hover:dark:border-[#f6f1eb]"
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

                className="text-[#f6f1eb] flex flex-row items-center justify-center gap-4
                rounded-full bg-cyan-400 px-6 py-2.5 font-bold hover:bg-green-400 dark:text-[#2d333b]
                 border-2 border-transparent hover:border-[#2d333b] hover:dark:border-[#f6f1eb]"
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
        <div className="mt-8"></div>
      </div>
    </div>
  );
}

export default Cosmetovigilance;
