import Link from "next/link";
import Image from "next/image";

export default function Card({ title, href, description, logoUrl }: { title: string; href: string; description: string; logoUrl: string;}) {
    return (
        <div className="p-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition">
            <Link href={href} className="flex flex-row items-center pb-4">
                <Image src={logoUrl} alt={title} width={32} height={32} className="rounded-full" /><span className="pr-2"></span><span className="font-bold">{title}</span>
            </Link>
            <p>
                {description}
            </p>
        </div>
    );
}