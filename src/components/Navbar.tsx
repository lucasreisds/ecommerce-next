'use client'
import { useCart } from "@/store/cart"
import Link from "next/link"

export function Navbar() {
    const items = useCart((state) => state.items)

    return (
        <nav className="flex justify-between items-center bg-white px-4 py-3 shadow">
            <Link href="/" className="font-bold text-xl">Store</Link>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <Link href="/cart" className="font-bold text-xl">Cart</Link>
                <span className="text-blue-400">{items.length}</span>
            </div>
        </nav>
    )
}