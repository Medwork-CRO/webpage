type DisplayParagraphsProps = {
  paragraphs: string[];
};

function DisplayParagraphs({ paragraphs }: DisplayParagraphsProps) {
  return (
    <div className="flex flex-col gap-8 whitespace-pre-line text-gray-500 dark:text-gray-400 text-md md:text-xl text-left w-full">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`${!index ? "font-semibold" : ""}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export default DisplayParagraphs;
