import Image, { StaticImageData } from "next/image";

type ImageInlineProps = {
  image: StaticImageData;
};

function ImageInline({
    image,
}: ImageInlineProps) {
    return (
        <Image
            src={image}
            className="
                h-[420px] object-cover
                rounded-lg
                border-4 border-gray-400 dark:border-gray-600 shadow-md
            "
            alt="alt"
        />
    );
}

export default ImageInline;
