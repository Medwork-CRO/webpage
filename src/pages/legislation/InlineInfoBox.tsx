import Link from "next/link";

export type InlineInfoBoxParams = {
  title: string;
  content: string;
  filePath: string;
  fileNameGR?: string;
  fileNameEN?: string;
  fileNameGR_EN?: string;
  extraFileNames?: { title: string; fileName: string }[];
};

const InlineInfoBox = ({
  title,
  content,
  filePath,
  fileNameGR,
  fileNameEN,
  fileNameGR_EN,
  extraFileNames,
}: InlineInfoBoxParams) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-24 justify-between w-full text-medwork-dark dark:text-medwork-light">
        <div className="flex flex-col">
          <div className="text-lg">{title}</div>
          <div className="text-sm">{content}</div>
        </div>
        <div className="flex flex-col text-lg">
          {fileNameGR && (
            <Link
              className="font-light narrow-letters whitespace-nowrap hover:underline focus-visible:underline text-blue-600 dark:text-blue-400"
              href={`/${filePath}/${fileNameGR}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF (GR)
            </Link>
          )}
          {fileNameEN && (
            <Link
              className="font-light narrow-letters whitespace-nowrap hover:underline focus-visible:underline text-blue-600 dark:text-blue-400"
              href={`/${filePath}/${fileNameEN}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF (EN)
            </Link>
          )}
          {fileNameGR_EN && (
            <Link
              className="font-light narrow-letters whitespace-nowrap hover:underline focus-visible:underline text-blue-600 dark:text-blue-400"
              href={`/${filePath}/${fileNameGR_EN}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF (GR & EN)
            </Link>
          )}
        </div>
      </div>
      {extraFileNames && (
        <div className="flex flex-col mt-4 gap-2 justify-between w-full text-medwork-dark dark:text-medwork-light">
          {extraFileNames.map(({ title, fileName }) => (
            <div
              key={title}
              className="flex flex-row items-center justify-between gap-2"
            >
              <div className="text-sm">{title}</div>
              <Link
                className="text-md font-light narrow-letters whitespace-nowrap hover:underline focus-visible:underline text-blue-600 dark:text-blue-400"
                href={`/${filePath}/${fileName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF (GR)
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="my-4 border-b border-gray-600 dark:border-gray-400 border-dashed"></div>
    </>
  );
};

export default InlineInfoBox;
