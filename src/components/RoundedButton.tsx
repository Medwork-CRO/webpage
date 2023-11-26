import Link from "next/link";

type RoundedButtonProps = {
  label: string;
  href: string;
};

function RoundedButton({ label, href }: RoundedButtonProps) {
    return (
        <Link
            role="button"
            tabIndex={0}
            className="
        flex flex-row items-center justify-center gap-4
        cursor-pointer
        font-light narrow-letters leading-relaxed
      text-medwork-light dark:text-medwork-dark
        py-2 px-4 text-sm sm:text-md md:text-lg text-center w-[200px] rounded-full
        bg-cyan-400 hover:bg-cyan-600 focus-visible:bg-cyan-600
        border-2 border-transparent
        hover:border-medwork-dark focus-visible:border-medwork-dark
        hover:dark:border-medwork-light focus-visible:dark:border-medwork-light
        transition duration-100 ease-in focus:outline-none"
            aria-label="Action button"
            href={href}
        >
            {label}
        </Link>
    );
}

export default RoundedButton;
