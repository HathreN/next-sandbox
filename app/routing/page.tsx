'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export default function Home() {
    const navLinks=[{href: "/dashboard", key:"dashboard"},{href:"/routing",key:"routing"}]
    const pathname = usePathname();
    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                    <Link
                        className={isActive ? 'text-blue-600' : 'text-red-600'}
                        href={link.href}
                        key={link.key}
                    >
                        {link.key}
                    </Link>
                );
            })}
            <Link href="#hashid" scroll={false}>
                Scroll to specific id.
            </Link>
        </>
    );
}