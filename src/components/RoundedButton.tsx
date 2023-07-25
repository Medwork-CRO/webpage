import Link from "next/link";

type RoundedButtonProps = {
  label: string;
  href: string;
};

function RoundedButton({ label, href }: RoundedButtonProps) {
  return (
    <Link
      className="
        flex flex-row items-center justify-center gap-4
        cursor-pointer text-medwork-light dark:text-medwork-dark
        py-2.5 px-4 text-sm sm:text-md md:text-lg text-center font-semibold w-[200px] rounded-full
        bg-cyan-400 hover:bg-cyan-600
        transition duration-100 ease-in focus:outline-none"
      aria-label="Action button"
      href={href}
    >
      {label}
    </Link>
  );
}

export default RoundedButton;
