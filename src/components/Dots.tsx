import classNames from "classnames";

type Props = {
    itemsLength: number;
    selectedIndex: number;
};

const Dots = ({ itemsLength, selectedIndex }: Props) => {
    const arr = new Array(itemsLength).fill(0);
    return (
        <div className="flex gap-2 justify-center bg-black dark:bg-white p-1 sm:p-1.5 rounded-full">
            {arr.map((_, index) => {
                const selected = index === selectedIndex;
                return (
                    <div
                        className={classNames({
                            "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 bg-cyan-500 dark:bg-cyan-700": true,
                            "opacity-40": !selected,
                        })}
                        key={index}
                    ></div>
                );
            })}
        </div>
    );
};

export default Dots;