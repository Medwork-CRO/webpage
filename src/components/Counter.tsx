import CountUp from "react-countup";

function Counter({ number, duration, title }: { number: number, duration: number, title: string }) {
  return (
    <div>
      <CountUp duration={duration} className="counter" end={number} />
      <span>{title}</span>
    </div>
  );
}

export default Counter;
