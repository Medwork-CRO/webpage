import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ title, children }: {title: string, children: Props}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        stopOnLastSnap: true,
        delay: 5000,
    })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }

        emblaApi?.on("select", selectHandler);
        return () => { emblaApi?.off("select", selectHandler); };
    }, [emblaApi]);

    const length = React.Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();

    return (
        <div className="group overflow-hidden relative" ref={emblaRef}>
            <div className="flex">{children}</div>
            <div className="absolute bottom-8 sm:bottom-16 z-20 w-full mb-8 sm:mb-2">
                <div className="flex flex-col justify-center gap-8 max-w-[1200px] px-4 md:px-6 lg:px-0 mx-auto text-gray-700 dark:text-gray-300 text-center">
                    <span className="font-sans font-light narrow-letters text-3xl sm:text-4xl lg:text-5xl leading-normal  sm:leading-normal md:leading-normal lg:leading-normal">
                        {title}
                    </span>
                </div>
            </div>

            <div className="absolute bottom-[50%] left-0 right-0 flex justify-center">
                <CarouselControls
                    canScrollNext={canScrollNext}
                    canScrollPrev={canScrollPrev}
                    onNext={() => emblaApi?.scrollNext()}
                    onPrev={() => emblaApi?.scrollPrev()}
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <Dots itemsLength={length} selectedIndex={selectedIndex} />
            </div>
        </div>
    );
};

export default Carousel;