import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-6 mx-auto text-center text-base-content">
            <p className="font-medium text-sm">© {
                new Date().getFullYear()
            } <Link href={"https://andy-cinquin.fr"} className={"underline"}>Andy Cinquin</Link></p>
            <p className="text-xs">
                Developed & Designed with ❤️ 🐝
                <Link href={"https://forhives.fr"}>ForHives co-founders</Link>
            </p>
        </footer>
    );
}
