import React, { useState, useEffect } from "react";

const LocalStorageProperty = "cookie-accepted";

export default function Cookies() {
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
        <div className="flex justify-center">
            <div
                id="cookies prompt"
                className="
                    flex justify-between items-center w-full max-w-[1200px] text-center whitespace-pre-line
                    z-30 fixed bottom-8 px-4 py-3 sm:px-3 sm:py-2 rounded-md
                    text-medwork-dark dark:text-medwork-light
                    bg-medwork-light dark:bg-medwork-dark bg-opacity-95
                    border-medwork-dark dark:border-medwork-light border
                ">
                <span>
                    We only use essential cookies required for our website to function properly and improve your browsing experience.
                </span>
                <button
                    onClick={handleAccept}
                    className="
                        ml-8 p-2 rounded-md
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
