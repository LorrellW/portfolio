import Image from "next/image"
import Link from "next/link"

export default function HomeLinkLogo() {
    return (
        <div className="absolute top-0 left-0 xs:m-4">
            <button>
                <Link href={"/"}>
                    <Image
                        src={"/logo5.png"}
                        width={100}
                        height={100}
                        className="h-20 w-20 object-contain"
                        alt="Logo"/>
                </Link>
            </button>
        </div>
    )
}