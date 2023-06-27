type DisplayParagraphsProps = {
  paragraphs: string[];
};

function DisplayParagraphs({ paragraphs }: DisplayParagraphsProps) {
  return (
    <div className="flex flex-col gap-8 whitespace-pre-line text-xl text-gray-500 dark:text-gray-400 px-0 sm:px-8 md:px-16 lg:px-24 md:text-2xl text-left">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`${!index ? "font-semibold" : ""}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export default DisplayParagraphs;
