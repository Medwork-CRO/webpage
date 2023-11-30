type LeadingParagraphsProps = {
  paragraphs: string[];
};

function LeadingParagraphs({ paragraphs }: LeadingParagraphsProps) {
    return (
        <div className="
        font-ultralight
        flex flex-col w-full
        gap-12 sm:gap-16
        whitespace-pre-line tracking-wide
        narrow-letters leading-relaxed
        text-medwork-brown dark:text-gray-400
        text-xl md:text-2xl text-left
      ">
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}

export default LeadingParagraphs;
