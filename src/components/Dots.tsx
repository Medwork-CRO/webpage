import classNames from "classnames";

type Props = {
    itemsLength: number;
    selectedIndex: number;
};

const Dots = ({ itemsLength, selectedIndex }: Props) => {
    const arr = new Array(itemsLength).fill(0);
    return (
        <div className="flex gap-2 -my-2 justify-center -translate-y-1">
            {arr.map((_, index) => {
                const selected = index === selectedIndex;
                return (
                    <div
                        className={classNames({
                            "h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-300 bg-cyan-800": true,
                            // tune down the opacity if slide is not selected
                            "opacity-50": !selected,
                        })}
                        key={index}
                    ></div>
                );
            })}
        </div>
    );
};

export default Dots;