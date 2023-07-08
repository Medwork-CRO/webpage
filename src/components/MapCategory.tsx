import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";
import Title from "./Title";

type MapCategoryProps = {
  location?: string;
  title?: string;
};

function getIFrame(location: string, rounded = false) {
  const rounding = rounded ? 'rounded-lg' : '';
  return (<iframe
    src={`https://maps.google.com/maps?q=${location}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
    className={`w-full h-[420px] ${rounding}
     border-t-4 border-t-[#2d333b] dark:border-t-[#f6f1eb]
    border-b-4 border-b-[#2d333b] dark:border-b-[#f6f1eb]
    border-r-4 border-r-[#2d333b] dark:border-r-[#f6f1eb]`}
    allowFullScreen
  ></iframe>);
}

function getCompanyInfo() {
  return (
    <div className="font-semibold leading-[2rem] sm:leading-[2rem] md:leading-[3rem] xl:leading-[4rem] text-lg sm:text-xl text-[#2d333b] dark:text-[#f6f1eb] text-left">
      <Title title="Connect with us" align="left" />
      <div className="text-[#2d333b] dark:text-[#f6f1eb] flex flex-col justify-end">
        <div className="mb-6 flex gap-4 items-center">
          <AiOutlinePhone className="h-6 w-6" />
          <Link
            href="tel:+302109960971"
            target="_blank"
            rel="noopener noreferrer"
          >
            (+30) 210 9960971
          </Link>
        </div>
        <div className="mb-6 flex gap-4 items-center">
          <AiOutlinePhone className="h-6 w-6" />
          <Link
            href="fax:+302109969578"
            target="_blank"
            rel="noopener noreferrer"
          >
            (+30) 210 9969578
          </Link>
        </div>
        <div className="mb-6 flex gap-4 items-center">
          <AiOutlineMail className="h-6 w-6" />
          <Link
            href="mailto:medworkinfo@medwork.gr"
            target="_blank"
            rel="noopener noreferrer"
          >
            medworkinfo@medwork.gr
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <AiOutlineEnvironment className="h-6 w-6" />
          <Link
            href="https://goo.gl/maps/KDKk5piro9Cb6AXG7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chiou 5, Argyroupoli 16452
          </Link>
        </div>
      </div>
    </div>
  );
}

function MapCategory({
  location = "Chiou5,Argyroupoli16452",
}: MapCategoryProps) {
  return (
    <>
      <div className="hidden sm:block w-full h-[420px] relative">
        <div className="flex flex-col md:flex-row">
          {getIFrame(location)}
          <div className="absolute inset-0 z-10 from-cyan-600 dark:from-cyan-800 to-transparent bg-gradient-to-r w-full"></div>
          <div className="absolute top-2/4 z-20 flex -translate-y-1/2 transform flex-col justify-center gap-8 px-8 md:px-12 lg:px-24">
            {getCompanyInfo()}
          </div>
        </div >
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 sm:hidden w-full">
        <div className="relative">
          <div className="absolute  inset-0 bg-gradient-to-r from-cyan-600 to-cyan-800"></div>
          <div className="relative w-full z-10 float-left p-6 md:p-12">
            {getIFrame(location, true)}
            <div className="mt-8 md:mt-0 text-[#f6f1eb]">
              {getCompanyInfo()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapCategory;
