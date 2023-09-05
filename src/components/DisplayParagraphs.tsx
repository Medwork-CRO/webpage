type DisplayParagraphsProps = {
  paragraphs: string[];
};

function DisplayParagraphs({ paragraphs }: DisplayParagraphsProps) {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 whitespace-pre-line tracking-wide text-gray-500 dark:text-gray-400 text-2xl md:text-3xl text-left w-full my-16">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`${!index ? "font-semibold" : ""}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export default DisplayParagraphs;
