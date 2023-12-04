import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { MdEmail } from "react-icons/md";

export enum ButtonType {
    TEXT,
    ICON,
    IMAGE,
}

type RoundedButtonExternalProps = {
  label: string;
  href: string;
  ariaLabel: string;
  type: ButtonType;
  source: StaticImageData;
};

function ImageryAddition({type, source}: {type: ButtonType, source: StaticImageData}) {
    switch (type) {
    case ButtonType.ICON:
        return <MdEmail className="h-6 w-6 object-cover" />;
    case ButtonType.IMAGE:
        return (
            <Image
                src={source}
                alt={source.toString()}
                className="h-6 w-6 object-cover"
            />
        );
    case ButtonType.TEXT:
    default:
        return <></>;
    }
}

function RoundedButtonExternal({ label, href, ariaLabel, type, source }: RoundedButtonExternalProps) {
    return (
        <Link
            className="flex flex-row items-center justify-center gap-4
                cursor-pointer text-medwork-light dark:text-medwork-dark
                font-light narrow-letters leading-relaxed whitespace-nowrap
                py-3 sm:py-2 px-6 sm:px-4 w-[200px] rounded-full
                text-sm sm:text-md md:text-lg text-center
                bg-blue-400 hover:bg-blue-500 focus-visible:bg-blue-500
                transition duration-100 ease-in focus:outline-none"
            aria-label={ariaLabel}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <ImageryAddition type={type} source={source} />
            {label}
        </Link>
    );
}

export default RoundedButtonExternal;
