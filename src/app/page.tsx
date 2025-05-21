
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

type StoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}
export default function Home() {
  const [products, setProducts] = useState<StoreProduct[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then(setProducts)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols4 gap-4 p-4">
      {products.map((product => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <div className="border p-4 rounded shadow hover:scale-105 transition">
            <img src={product.image} alt={`product ${product.title}`} className="h-32 mx-auto" />
            <h2 className="text-sm mt-2">{product.title}</h2>
            <p className="font-bold">${product.price}</p>
          </div>
        </Link>
      )))}
    </div>
  );
}
