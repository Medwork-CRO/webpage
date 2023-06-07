import React from 'react';

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <div className="flex items-center justify-center">
      <span className="text-xl xs:text-3xl text-cyan-400">
        {/* &#8226;  */}
        {title}
      </span>
    </div>
  );
}

export default Title;