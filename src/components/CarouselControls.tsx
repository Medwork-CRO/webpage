import classNames from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
    canScrollPrev: boolean;
    canScrollNext: boolean;
    onPrev(): void;
    onNext(): void;
};

export default function CarouselControls(props: Props) {
    return (
        <div className="flex w-full justify-between items-center gap-2">
            <button
                onClick={() => {
                    if (props.canScrollPrev) {
                        props.onPrev();
                    }
                }}
                disabled={!props.canScrollPrev}
                className={classNames({
                    "w-10 h-10 ml-4 text-white rounded-full flex items-center justify-center": true,
                    "bg-black bg-opacity-40": true,
                })}
            >
                <FaChevronLeft color="white" />
            </button>
            <button
                onClick={() => {
                    if (props.canScrollNext) {
                        props.onNext();
                    }
                }}
                disabled={!props.canScrollNext}
                className={classNames({
                    "w-10 h-10 mr-4 text-white rounded-full flex items-center justify-center": true,
                    "bg-black bg-opacity-40": true,
                })}
            >
                <FaChevronRight color="white" />
            </button>
        </div>
    );
};