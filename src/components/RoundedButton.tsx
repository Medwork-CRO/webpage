import Link from "next/link";

type RoundedButtonProps = {
  label: string;
  href: string;
};

export default function RoundedButton({ label, href }: RoundedButtonProps) {
  return (
    <Link
      className="
      rounded-full px-6 text-sm font-semibold py-3 text-center focus:outline-none focus:ring transition ease-in duration-100
      text-white min-w-[200px] w-[200px] max-w-[200px]
      bg-cyan-400 hover:bg-orange-500 focus:ring-orange-300 active:bg-orange-700
      "
      aria-label="Action button"
      href={href}
    >
      {label}
    </Link >
  );
}
