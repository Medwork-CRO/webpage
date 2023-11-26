import Link from "next/link";

type InfoBoxProps = {
  title: string;
  text: string;
  link: string;
  color: string;
};

const InfoBox = ({ title, text, link, color }: InfoBoxProps) => (
    <Link href={link}>
        <div className={`
      flex flex-col p-4 ${color} rounded-lg
      sm:h-[18rem] lg:h-[20rem]
      w-full saturate-50 hover:saturate-150
      hover:border-cyan-600 border-4 border-transparent
      text-cyan-800 transition duration-500 ease-in-out`}>
            <h1 className="mb-2 text-2xl sm:text-3xl font-bold">{title.toUpperCase()}</h1>
            <p className="text-md sm:text-lg font-semibold">{text}</p>
        </div>
    </Link>
);

export default InfoBox;
