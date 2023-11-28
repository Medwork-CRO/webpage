import Image, { StaticImageData } from "next/image";

type ImageCategoryProps = {
  title: string;
  image: StaticImageData;
  description?: string;
  textSide?: "left" | "right";
};

function ImageCategory({
    title,
    description,
    image,
}: ImageCategoryProps) {
    return (
        <>
            <div className="relative flex flex-col md:flex-row flex-[0_0_100%] motion-safe:animate-fadeIn">
                <Image
                    src={image}
                    className="h-[75vh] object-cover"
                    alt="alt"
                />

                {/* <div className="absolute inset-x-0 top-0 z-10 from-medwork-light dark:from-medwork-dark to-transparent bg-gradient-to-b h-[6%]"></div> */}
                <div className="absolute inset-x-0 bottom-0 z-10 from-medwork-light dark:from-medwork-dark to-transparent bg-gradient-to-t h-5/6"></div>

                <div className="absolute bottom-8 sm:bottom-16 z-20 w-full mb-8 sm:mb-2">
                    <div className="flex flex-col justify-center gap-8 max-w-[1200px] px-4 md:px-6 lg:px-0 mx-auto text-gray-700 dark:text-gray-300 text-center">
                        <div className="mt-4 md:mt-0">
                            <h1 className="mb-2 text-2xl sm:text-6xl italic">{title}</h1>
                            <p className="mb-4 text-md sm:text-3xl">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageCategory;
