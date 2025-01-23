import CountUp from "react-countup";

function Counter({
  number,
  duration,
  symbol,
}: {
  number: number;
  duration: number;
  symbol: string;
}) {
  return (
    <div>
      <CountUp duration={duration} className="counter" end={number} />
      <span>{symbol}</span>
    </div>
  );
}

export default Counter;
