"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Solutions",
        path: "/solutions",
    },
    {
        name: "About",
        path: "/about",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${
                            link.path === pathname && "text-indigo-600 border-b-2 border-indigo-600"} capitalize font-medium hover:text-indigo-600 transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;