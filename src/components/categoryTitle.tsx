type CategoryTitleProps = {
  title: string;
};

export default function CategoryTitle({ title }: CategoryTitleProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <span className="text-3xl text-cyan-400">
        {/* &#8226;  */}
        {title}
      </span>
    </div>
  );
}
