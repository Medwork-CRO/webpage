import Link from 'next/link';
import React from 'react';

export type InlineInfoBoxParams = {
    title: string,
    content: string,
    filePath: string,
    fileName: string
};

const InlineInfoBox = ({ title, content, filePath, fileName }: InlineInfoBoxParams) => {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-24 justify-between w-full text-medwork-dark dark:text-medwork-light">
                <div className="flex flex-col">
                    <div className="text-lg">
                        {title}
                    </div>
                    <div className="text-sm">
                        {content}
                    </div>
                </div>
                <div className="text-lg">
                    <Link
                        className="font-semibold hover:underline whitespace-nowrap text-blue-600 dark:text-blue-400"
                        href={`${filePath}/${fileName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={fileName}
                    >
                        Download PDF
                    </Link>
                </div>
            </div >
            <div className="my-4 border-b border-gray-600 dark:border-gray-400 border-dashed"></div>
        </>
    );
}

export default InlineInfoBox;
