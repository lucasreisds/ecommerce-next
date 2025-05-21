'use client'
import { StoreProduct } from "@/app/page";
import { useCart } from "@/store/cart";

export function AddToCartButton({ product }: { product: StoreProduct }) {
    const add = useCart((state) => state.add);

    return (
        <button onClick={() => add(product)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">
            Add to Cart
        </button>
    );
}