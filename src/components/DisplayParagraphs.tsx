type DisplayParagraphsProps = {
  paragraphs: string[];
};

function DisplayParagraphs({ paragraphs }: DisplayParagraphsProps) {
    return (
        <div className="
        flex flex-col w-full
        gap-12 sm:gap-16
        whitespace-pre-line tracking-wide
        narrow-letters leading-relaxed
        text-medwork-brown dark:text-gray-400
        text-2xl md:text-3xl text-left
      ">
            {paragraphs.map((paragraph, index) => (
                <p key={index} className={`${!index ? "font-thin" : "font-thin"}`}>{paragraph}</p>
            ))}
        </div>
    );
}

export default DisplayParagraphs;
