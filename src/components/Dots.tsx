import classNames from "classnames";

type Props = {
    itemsLength: number;
    selectedIndex: number;
};

const Dots = ({ itemsLength, selectedIndex }: Props) => {
    const arr = new Array(itemsLength).fill(0);
    return (
        <div className="flex gap-2 justify-center bg-gray-800 dark:bg-gray-600 p-1 sm:p-1.5 rounded-full">
            {arr.map((_, index) => {
                const selected = index === selectedIndex;
                return (
                    <div
                        className={classNames({
                            "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 bg-cyan-400 border border-[#f6f1eb] dark:border-[#2d333b]": true,
                            "bg-green-800 ": !selected,
                        })}
                        key={index}
                    ></div>
                );
            })}
        </div>
    );
};

export default Dots;