"use client";

import { usePathname } from "next/navigation";

export function Sidebar({ items }: { items: string[] }) {
    const pathname = usePathname();
    return (
        <aside className="w-52 border-r p-4 space-y-2">
            {items.map((item) => (
                <p
                    key={item}
                    className={pathname.includes(item.toLowerCase())
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"}
                >
                    {item}
                </p>
            ))}
        </aside>
    );
}