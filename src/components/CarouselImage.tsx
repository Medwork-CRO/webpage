import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageShowCaseProps = {
  image: StaticImageData;
  title?: string;
};

function CarouselImage({ image, title }: ImageShowCaseProps) {
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
    <div className="relative flex flex-col md:flex-row h-[88vh] sm::h-[89vh] md:h-[88vh] flex-[0_0_100%] motion-safe:animate-fadeIn">
      <Image
        src={image}
        className="h-full min-w-full object-cover"
        alt="alt"
      />

      {/* <div className="absolute inset-x-0 top-0 z-10 from-[#f6f1eb] dark:from-[#2d333b] to-transparent bg-gradient-to-b h-[6%]"></div> */}
      <div className="absolute inset-x-0 bottom-0 z-10 from-[#f6f1eb] dark:from-[#2d333b] to-transparent bg-gradient-to-t h-5/6"></div>

      <div className="absolute bottom-8 sm:bottom-16 z-20 w-full mb-8 sm:mb-2">
        <div className="flex flex-col justify-center gap-8 max-w-[86rem] px-4 md:px-6 lg:px-0 mx-auto text-[#2d333b] dark:text-[#f6f1eb] text-left">
          <span className="font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-relaxed md:leading-relaxed lg:leading-normal">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarouselImage;
