import Link from "next/link";
import React, { useState, useEffect } from "react";

const LocalStorageProperty = "cookie-accepted";

export default function Cookies() {
    const cookiesPdf = "/pdfs/cookie-notice.pdf";
    const [showPrompt, setShowPrompt] = useState(true);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem(LocalStorageProperty);
        if (cookieAccepted) {
            setShowPrompt(false);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(LocalStorageProperty, "true");
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div className="flex justify-center z-30">
            <div
                id="cookies prompt"
                className="z-30
                    flex justify-between items-center w-[90vw] max-w-[1200px] mx-auto
                    fixed bottom-8 px-4 py-3 sm:px-3 sm:py-2 rounded-md
                    text-medwork-dark dark:text-medwork-light text-left whitespace-pre-line
                    bg-medwork-light dark:bg-medwork-dark bg-opacity-95
                    border-medwork-dark dark:border-medwork-light border
                ">
                <span>
                    We only use essential cookies required for our website to function properly and improve your browsing experience{" "}
                    <Link
                        className="font-light narrow-letters whitespace-nowrap hover:underline focus-visible:underline text-blue-600 dark:text-blue-400"
                        href={cookiesPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Cookie Notice)
                    </Link>.
                </span>
                <button
                    onClick={handleAccept}
                    className="
                        ml-8 p-4 sm:p-3 m-1 sm:m-2 rounded-md
                        text-medwork-dark dark:text-medwork-light
                        bg-sky-400 dark:bg-sky-600
                        border
                ">
                    OK
                </button>
            </div>
        </div>
    );
}
