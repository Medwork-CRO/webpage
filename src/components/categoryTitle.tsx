import React from 'react';

type CategoryTitleProps = {
  title: string;
};

function CategoryTitle({ title }: CategoryTitleProps) {
  return (
    <div className="flex items-center justify-center">
      <span className="text-3xl text-cyan-400">
        {/* &#8226;  */}
        {title}
      </span>
    </div>
  );
}

export default CategoryTitle;