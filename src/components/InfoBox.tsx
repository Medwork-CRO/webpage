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
          sm:h-[20rem] lg:h-[24rem] w-full
          hover:border-cyan-600 border-4 border-transparent
          text-cyan-800 transition duration-500 ease-in-out`}
        >
            <h1 className="mb-2 text-3xl sm:text-2xl font-semibold narrow-letters leading-relaxed ">{title.toUpperCase()}</h1>
            <p className="text-xl sm:text-lg font-normal narrow-letters leading-relaxed">{text}</p>
        </div>
    </Link>
);

export default InfoBox;
