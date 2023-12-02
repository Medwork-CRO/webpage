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
                    bg-gray-300 dark:bg-gray-700
                    flex flex-col items-center overflow-hidden
                    transform transition duration-200 ease-in-out
                    border-4 border-transparent rounded-lg
                    hover:border-gray-400 dark:hover:border-gray-600
                    h-full sm:h-[24rem] lg:h-[29rem] xl:h-[30rem] w-full
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
