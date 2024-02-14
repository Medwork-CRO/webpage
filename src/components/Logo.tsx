import medworkLogo from "@assets/logos/medwork-logo.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <Link
            className="flex items-center gap-4"
            aria-label="Medwork Logo"
            href="/"
        >
            <Image src={medworkLogo} alt="Logo image" width={176} />
            {/* <Image src={medworkLogo} alt="Logo image" width={46} />
            <div
                aria-label="Name"
                className={"font-ultrathin narrow-letters leading-relaxed text-3xl text-medwork-brown dark:text-medwork-light"}
            >
                Medwork
            </div> */}
        </Link>
    );
}

export default Logo;
