import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { MdFax, MdWorkOutline } from "react-icons/md";

enum ContactType {
    Phone,
    Fax,
    Email,
    Work,
    Address,
    LinkedIn
}

type MapCategoryProps = {
    location?: string;
    title?: string;
};

function getIFrame(location: string, rounded = false, height = "h-[100vh]") {
    const rounding = rounded ? "rounded-lg" : "";
    return (<iframe
        src={`https://maps.google.com/maps?q=${location}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
        className={`w-full ${height} ${rounding}`}
        allowFullScreen
    ></iframe>);
}

function getIcon(contactType: ContactType) {
    switch (contactType) {
    case ContactType.Phone:
        return <FaPhone className="h-6 w-6" />;
    case ContactType.Fax:
        return <MdFax className="h-6 w-6" />;
    case ContactType.Email:
        return <MdEmail className="h-6 w-6" />;
    case ContactType.Work:
        return <MdWorkOutline className="h-6 w-6" />;
    case ContactType.Address:
        return <MdLocationOn className="h-6 w-6" />;
    case ContactType.LinkedIn:
        return <FaLinkedin className="h-6 w-6" />;
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
    case ContactType.LinkedIn:
        href = `https://www.linkedin.com/${value}`;
        break;
    }

    return (<div className="flex gap-4 items-center rounded-lg py-3 text-lg md:text-xl font-semibold">
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
            <div className="text-medwork-dark dark:text-medwork-light flex flex-col justify-start gap-4">
                {getContact("(+30) 210 9960971", "+302109960971", ContactType.Phone)}
                {getContact("(+30) 210 9969578", "+302109969578", ContactType.Fax)}
                {getContact("medworkinfo@medwork.gr", "medworkinfo@medwork.gr", ContactType.Email)}
                {getContact("Medwork", "companies/medwork", ContactType.LinkedIn)}
                {getContact("5 Chiou street, 164 52 Argyroupolis, Greece", "KDKk5piro9Cb6AXG7", ContactType.Address)}
            </div>
        </div>
    );
}

function MapCategory({
    location = "Chiou 5, Argyroupolis 16452, Greece",
}: MapCategoryProps) {
    return (
        <>
            <div className="hidden sm:block w-full">
                <div className="flex flex-col md:flex-row h-[100vh] relative">
                    {getIFrame(location)}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-medwork-light dark:from-medwork-dark via-transparent to-transparent"></div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-l from-medwork-light dark:from-medwork-dark via-transparent to-transparent"></div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-medwork-light dark:from-medwork-dark via-transparent to-transparent"></div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-medwork-light dark:from-medwork-dark via-transparent to-transparent"></div>

                    <div className="absolute top-1/2 z-10 -translate-y-1/2 transform w-full">
                        <div className="flex flex-col justify-center gap-8 px-4 md:px-6 lg:px-0 max-w-[1200px] mx-auto">
                            {getCompanyInfo()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 sm:hidden w-full">
                <div className="relative">
                    <div className="absolute inset-0 from-medwork-light dark:from-medwork-dark to-transparent bg-gradient-to-t"></div>
                    <div className="relative w-full z-10 float-left p-4">
                        {getIFrame(location, true, "h-[24]")}
                        <div className="mt-8 md:mt-0 text-medwork-light">
                            {getCompanyInfo()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MapCategory;