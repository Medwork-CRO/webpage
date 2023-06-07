import Link from "next/link";

type RoundedButtonProps = {
  label: string;
  href: string;
  color: "gray" | "orange";
};

function RoundedButton({ label, href, color }: RoundedButtonProps) {
  return (
    <Link
      className={`
      xs:text-md w-[200px] rounded-full bg-cyan-400 py-3 text-center text-sm font-semibold
      transition duration-100 ease-in focus:outline-none
      focus:ring ${
        color === "orange"
          ? "text-white hover:bg-orange-500 focus:ring-orange-300 active:bg-orange-700"
          : "text-black hover:bg-gray-100 focus:ring-gray-300 active:bg-gray-500"
      }`}
      aria-label="Action button"
      href={href}
    >
      {label}
    </Link>
  );
}

export default RoundedButton;
