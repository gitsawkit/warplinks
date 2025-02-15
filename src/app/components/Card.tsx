import Link from "next/link";

export default function Card({ title, href }: { title: string; href: string }) {
    return (
        <Link href={href} className="p-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition">
            {title}
        </Link>
    );
}