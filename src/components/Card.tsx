import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
    index: number,
    imageData: StaticImageData;
    imageTitle: string;
    imageDescription: string;
    readMoreLink: string;
};

function Card({
    index,
    imageData,
    imageTitle,
    imageDescription,
    readMoreLink,
}: CardProps) {
    return (
        <div className="flex flex-col gap-2">
            <Link href={readMoreLink}>
                <div tabIndex={index} className="
                    flex flex-col items-center
                    border-2 border-gray-300 dark:border-gray-700
                    rounded-lg
                    overflow-hidden
                    transform transition duration-200 ease-in-out
                    hover:border-gray-400 dark:hover:border-gray-600
                    h-full sm:h-[24rem] lg:h-[28rem] xl:h-[30rem] w-full
                ">
                    <Image
                        className="object-cover h-56"
                        src={imageData}
                        alt={imageTitle}
                    />
                    <div className="p-4">
                        <p className="mb-6 text-xl narrow-letters leading-relaxed">{imageTitle}</p>
                        <p className="text-md narrow-letters leading-relaxed">{imageDescription}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
