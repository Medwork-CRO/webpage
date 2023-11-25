type DisplayParagraphsProps = {
  paragraphs: string[];
};

function DisplayParagraphs({ paragraphs }: DisplayParagraphsProps) {
  return (
    <div className="
      flex flex-col w-full my-16
      gap-16 sm:gap-24 whitespace-pre-line tracking-wide font-light narrow-letters leading-relaxed
      text-gray-500 dark:text-gray-400 text-2xl md:text-3xl text-left">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`${!index ? "font-extralight" : "font-light"}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export default DisplayParagraphs;
