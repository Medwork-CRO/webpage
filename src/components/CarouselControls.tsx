import classNames from 'classnames';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
                        onClick={props.onPrev}
                        className={classNames({
                            'w-10 h-10 ml-4 text-medwork-dark dark:text-medwork-light border-medwork-dark dark:border-medwork-light border rounded-full flex items-center justify-center': true,
                            'bg-black bg-opacity-40': true,
                        })}
                    >
                        <FaChevronLeft color="white" />
                    </button>
                ) : (
                    <div className='w-10 h-10 ml-4'></div>
                )}
                {props.canScrollNext ? (
                    <button
                        onClick={props.onNext}
                        className={classNames({
                            'w-10 h-10 mr-4 text-medwork-dark dark:text-medwork-light border-medwork-dark dark:border-medwork-light border rounded-full flex items-center justify-center': true,
                            'bg-black bg-opacity-40': true,
                        })}
                    >
                        <FaChevronRight color="white" />
                    </button>
                ) : (
                    <div className='w-10 h-10 mr-4'></div>
                )}
            </div>
        </div>
    );
};

export default CarouselControls;
