import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type ImageShowCaseProps = {
  image: StaticImageData;
  title?: string;
};

function ImageCarousel({ image, title }: ImageShowCaseProps) {
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const targets = document.querySelectorAll(".js-show-on-scroll");

        const onScroll = () => {
            const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

            if (viewportWidth >= 576) {
                const scrollY = window.scrollY;
                const isScrollingDown = scrollY > lastScrollTop;

                targets.forEach(target => {
                    if (isScrollingDown) {
                        target.classList.remove("motion-safe:animate-enlarge");
                        target.classList.add("motion-safe:animate-minify");
                    } else {
                        target.classList.remove("motion-safe:animate-minify");
                        target.classList.add("motion-safe:animate-enlarge");
                    }
                });

                setLastScrollTop(scrollY);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [lastScrollTop]);

    return (
        <div className="relative flex flex-col md:flex-row h-[50vh] flex-[0_0_100%] motion-safe:animate-fadeIn justify-center">
            <Image
                src={image}
                className="h-full max-w-[1200px] object-cover"
                alt="alt"
            />

            {/* <div className="absolute inset-x-0 top-0 z-10 from-medwork-light dark:from-medwork-dark to-transparent bg-gradient-to-b h-[6%]"></div> */}
            <div className="absolute inset-x-0 bottom-0 z-10 from-medwork-light dark:from-medwork-dark to-transparent bg-gradient-to-t h-5/6"></div>

            {title && <div className="absolute bottom-8 sm:bottom-16 z-20 w-full mb-8 sm:mb-2">
                <div className="flex flex-col justify-center gap-8 max-w-[1200px] px-4 md:px-6 lg:px-0 mx-auto text-gray-700 dark:text-gray-300 text-center">
                    <span className="font-sans font-light narrow-letters text-3xl sm:text-4xl lg:text-5xl leading-normal  sm:leading-normal md:leading-normal lg:leading-normal">
                        {title}
                    </span>
                </div>
            </div>}
        </div>
    );
}

export default ImageCarousel;
