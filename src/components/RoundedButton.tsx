import Link from "next/link";

type RoundedButtonProps = {
  label: string;
  href: string;
  color: 'gray' | 'orange';
};

export default function RoundedButton({ label, href, color }: RoundedButtonProps) {
  return (
    <Link
      className={`
      rounded-full px-6 text-sm font-semibold py-3 text-center focus:outline-none focus:ring transition ease-in duration-100
      text-white min-w-[200px] w-[200px] max-w-[200px]
      bg-cyan-400 hover:bg-${color}-500 focus:ring-${color}-300 active:bg-${color}-700
      `}
      aria-label="Action button"
      href={href}
    >
      {label}
    </Link >
  );
}
