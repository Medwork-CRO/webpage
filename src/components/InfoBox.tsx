import Link from "next/link";

type InfoBoxProps = {
  title: string;
  text: string;
  link: string;
  color: string;
};

const InfoBox = ({ title, text, link, color }: InfoBoxProps) => (
    <Link href={link}>
        <div className={`${color}
          flex flex-col p-4 rounded-lg
          h-full sm:h-[16rem] md:h-[18rem] lg:h-[20rem] w-full
          hover:border-cyan-600 border-4 border-transparent
          text-cyan-800 transition duration-500 ease-in-out`}
        >
            <p className="mb-6 text-xl narrow-letters leading-relaxed border-b border-cyan-600">{title.toUpperCase()}</p>
            <p className="text-md narrow-letters leading-relaxed">{text}</p>
        </div>
    </Link>
);

export default InfoBox;
