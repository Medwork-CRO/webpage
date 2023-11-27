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
                ">
                    <Image
                        className="object-cover"
                        src={imageData}
                        alt={imageTitle}
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {imageTitle}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {imageDescription}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
