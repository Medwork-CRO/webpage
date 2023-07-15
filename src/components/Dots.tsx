import classNames from "classnames";

type Props = {
    itemsLength: number;
    selectedIndex: number;
};

function Dots({ itemsLength, selectedIndex }: Props) {
    const arr = new Array(itemsLength).fill(0);
    return (
        <div className="flex gap-2 justify-center bg-gray-800 dark:bg-gray-600 p-1 sm:p-1.5 rounded-full">
            {arr.map((_, index) => {
                const selected = index === selectedIndex;
                return (
                    <div
                        className={classNames({
                            "h-2 w-4 sm:h-2.5 sm:w-4.5 rounded-full transition-all duration-300 bg-cyan-400": true,
                            "bg-green-700 w-2 sm:w-2.5": !selected,
                        })}
                        key={index}
                    ></div>
                );
            })}
        </div>
    );
};

export default Dots;