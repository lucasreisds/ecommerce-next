'use client'
import { useCart } from "@/store/cart"

export default function CartPage() {
    const { items, remove } = useCart()
    const total = items.reduce((acc, item) => acc + item.price, 0)

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Cart</h1>
            {items.length === 0 && <p>Empty cart.</p>}
            {items.map((item, itemId) => (
                <div key={itemId} className="flex justify-between items-center border-b py-2">
                    <div>{item.title}</div>
                    <div className="flex items-center gap-2">
                        <span>${item.price}</span>
                        <button onClick={() => remove(item.id)} className="text-red-500">Remove</button>
                    </div>
                </div>
            ))}
            <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
        </div>
    )
}