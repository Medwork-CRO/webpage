import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        stopOnLastSnap: true,
        delay: 7000,
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