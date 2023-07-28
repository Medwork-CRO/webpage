import Link from 'next/link';
import React from 'react';

export type DropDownInfo = {
    title: string,
    content: string,
    filePath: string,
    fileName: string
};

const DropDown = ({ title, content, filePath, fileName, onClick, isOpen }: DropDownInfo & { onClick: () => void, isOpen: boolean }) => {
    const toggleOpen = () => onClick();

    return (
        <div className="item py-6 border-l-2 pl-4 border-medwork-dark dark:border-medwork-light">
            <div className="w-full flex align-center justify-between cursor-pointer text-left text-medwork-dark dark:text-medwork-light" onClick={toggleOpen}>
                <span className={`text-lg ${isOpen ? 'text-cyan-600 dark:text-cyan-400' : ''}`}>{title}</span>
                <span>
                    <svg className={`w-5 h-5 transition-all duration-500 ${isOpen ? 'transform rotate-180' : ''}`}
                        fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </div>
            <div className={`flex flex-col gap-2 text-md mt-3 ml-4 text-medwork-dark dark:text-medwork-light transition-all duration-500 ${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <p>{content}</p>
                <Link
                    className="font-semibold hover:underline whitespace-nowrap text-blue-600 dark:text-blue-400"
                    href={`${filePath}/${fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={fileName}
                >
                    {fileName}
                </Link>
            </div>
        </div>
    );
}

export default DropDown;
