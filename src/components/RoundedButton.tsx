import Link from "next/link";

type RoundedButtonProps = {
  label: string;
  href: string;
  color: "gray" | "orange";
};

function RoundedButton({ label, href, color }: RoundedButtonProps) {
  return (
    <Link
      className="cursor-pointer text-white xs:text-md w-[200px] rounded-full bg-cyan-400 hover:bg-green-400 py-3 text-center text-sm font-semibold transition duration-100 ease-in focus:outline-none"
      aria-label="Action button"
      href={href}
    >
      {label}
    </Link>
  );
}

export default RoundedButton;
