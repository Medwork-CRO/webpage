import React from "react";
import Counter from "./Counter";
import { motion } from "framer-motion";

type Stat = { count: number; symbol: string; title: string; point: string };

function Statistic({ count, symbol, title, point }: Stat) {
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="flex w-56 flex-col"
    >
      <span className="flex flex-row self-center mb-4 text-4xl text-blue-500">
        <Counter number={count} symbol={symbol} duration={3} />
      </span>
      <span className="subtext text-2xl font-extralight narrow-letters leading-relaxed text-medwork-brown dark:text-gray-400">
        {title} <strong>{point}</strong>
      </span>
    </motion.div>
  );
}

function Statistics({ Stats }: { Stats: Stat[] }) {
  return (
    <div className="flex flex-col sm:flex-row text-center items-center justify-between gap-8 w-full">
      {Stats.map((stat, i) => (
        <React.Fragment key={i}>
          <Statistic
            key={i}
            count={stat.count}
            title={stat.title}
            point={stat.point}
            symbol={stat.symbol}
          />
          {i < Stats.length - 1 && (
            <div className="h-full px-12 sm:px-0 sm:py-12 border border-gray-500"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Statistics;
