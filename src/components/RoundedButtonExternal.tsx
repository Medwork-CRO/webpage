import kariera from "@assets/companies/kariera_icon.png";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export enum ButtonType {
  TEXT,
  EMAIL,
  LINKEDIN,
  KARIERA,
}

type RoundedButtonExternalProps = {
  label: string;
  href: string;
  ariaLabel: string;
  type: ButtonType;
};

function ImageryAddition({ type }: { type: ButtonType }) {
  switch (type) {
  case ButtonType.EMAIL:
    return <MdEmail className="h-6 w-6 object-cover" />;
  case ButtonType.LINKEDIN:
    return <FaLinkedin className="h-6 w-6" />;
  case ButtonType.KARIERA:
    return (
      <Image src={kariera} alt={"kariera"} className="h-6 w-6 object-cover" />
    );
  case ButtonType.TEXT:
  default:
    return <></>;
  }
}

function RoundedButtonExternal({
  label,
  href,
  ariaLabel,
  type,
}: RoundedButtonExternalProps) {
  return (
    <Link
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
                flex flex-row items-center justify-center gap-4
                cursor-pointer text-medwork-light dark:text-medwork-dark
                font-light narrow-letters leading-relaxed whitespace-nowrap
                py-3 sm:py-2 px-6 sm:px-4 w-[200px] rounded-full
                text-lg md:text-xl text-center
                bg-blue-400 hover:bg-blue-500 focus-visible:bg-blue-500
                transition duration-100 ease-in focus:outline-none
            "
    >
      <ImageryAddition type={type} />
      {label}
    </Link>
  );
}

export default RoundedButtonExternal;
