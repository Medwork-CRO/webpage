import Link from "next/link";
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

enum ContactType {
  Phone,
  Fax,
  Email,
  Address,
}

type MapCategoryProps = {
  location?: string;
  title?: string;
};

function getIFrame(location: string, rounded = false) {
  const rounding = rounded ? 'rounded-lg' : '';
  return (<iframe
    src={`https://maps.google.com/maps?q=${location}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
    className={`w-full h-[420px] ${rounding}`}
    allowFullScreen
  ></iframe>);
}

function getIcon(contactType: ContactType) {
  switch (contactType) {
    case ContactType.Phone:
      return <AiOutlinePhone className="h-6 w-6" />;
    case ContactType.Fax:
      return <AiOutlinePhone className="h-6 w-6" />;
    case ContactType.Email:
      return <AiOutlineMail className="h-6 w-6" />;
    case ContactType.Address:
      return <AiOutlineEnvironment className="h-6 w-6" />;
  }
}

function getContact(display: string, value: string, contactType: ContactType) {
  let href = "";

  switch (contactType) {
    case ContactType.Phone:
      href = `tel:${value}`;
      break;
    case ContactType.Fax:
      href = `fax:${value}`;
      break;
    case ContactType.Email:
      href = `mailto:${value}`;
      break;
    case ContactType.Address:
      href = `https://goo.gl/maps/${value}`;
      break;
  }

  return (<div className="flex gap-4 items-center rounded-lg py-3">
    {getIcon(contactType)}
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {display}
    </Link>
  </div>);
}

function getCompanyInfo() {
  return (
    <div className="font-semibold text-xl text-left">
      <div className="text-[#f6f1eb] flex flex-col justify-start gap-4">
        {getContact('(+30) 210 9960971', '+302109960971', ContactType.Phone)}
        {getContact('(+30) 210 9969578', '+302109969578', ContactType.Fax)}
        {getContact('medworkinfo@medwork.gr', 'medworkinfo@medwork.gr', ContactType.Email)}
        {getContact('Greece, Chiou 5, Argyroupoli 16452', 'KDKk5piro9Cb6AXG7', ContactType.Address)}
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
          <div className="absolute top-2/4 z-10 flex -translate-y-1/2 transform flex-col justify-center gap-8 ml-12 lg:ml-24 h-full">
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
