import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
    canScrollPrev: boolean;
    canScrollNext: boolean;
    onPrev(): void;
    onNext(): void;
};

function CarouselControls(props: Props) {
    return (
        <div className='sm:hidden group-hover:block w-full'>
            <div className="flex w-full justify-between items-center gap-2">
                {props.canScrollPrev ? (
                    <button
                        id="next-image"
                        aria-label="Move to next image"
                        onClick={props.onPrev}
                        className="ml-4 w-10 h-10 rounded-full flex items-center justify-center
                        bg-medwork-light dark:bg-medwork-dark bg-opacity-40
                        border-medwork-dark dark:border-medwork-light border"
                    >
                        <FaChevronLeft className="text-medwork-dark dark:text-medwork-light" />
                    </button>
                ) : (
                    <div className="w-10 h-10 ml-4"></div>
                )}
                {props.canScrollNext ? (
                    <button
                        id="prev-image"
                        aria-label="Move to previous image"
                        onClick={props.onNext}
                        className="mr-4 w-10 h-10 rounded-full flex items-center justify-center
                        bg-medwork-light dark:bg-medwork-dark bg-opacity-40
                        border-medwork-dark dark:border-medwork-light border"
                    >
                        <FaChevronRight className="text-medwork-dark dark:text-medwork-light" />
                    </button>
                ) : (
                    <div className='w-10 h-10 mr-4'></div>
                )
                }
            </div>
        </div>
    );
}

export default CarouselControls;
