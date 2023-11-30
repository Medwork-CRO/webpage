type DisplayParagraphsProps = {
  paragraphs: string[];
  withLead: boolean;
};

function DisplayParagraphs({ paragraphs, withLead = false }: DisplayParagraphsProps) {
    return (
        <div className="
        p-4 sm:p-8 rounded-2xl
        bg-medwork-light2 dark:bg-medwork-dark2
        flex flex-col w-full
        gap-12 sm:gap-16
        whitespace-pre-line tracking-wide text-left
        narrow-letters leading-relaxed
        text-medwork-brown dark:text-gray-400
      ">
            {paragraphs.map((paragraph, index) => (
                <p key={index} className={`${!index && withLead ? "font-light text-2xl md:text-3xl" : "font-thin text-xl md:text-2xl"}`}>{paragraph}</p>
            ))}
        </div>
    );
}

export default DisplayParagraphs;
