import Link from "next/link";

type RoundedButtonProps = {
  label: string;
  href: string;
};

function RoundedButton({ label, href }: RoundedButtonProps) {
  return (
    <Link
      className="
        cursor-pointer text-white xs:text-md w-[200px] rounded-full
        bg-cyan-400 hover:bg-cyan-600 py-2
        text-center text-sm font-semibold transition duration-100 ease-in focus:outline-none
        border-2 border-transparent hover:border-[#2d333b] hover:dark:border-[#f6f1eb]"
      aria-label="Action button"
      href={href}
    >
      {label}
    </Link>
  );
}

export default RoundedButton;
