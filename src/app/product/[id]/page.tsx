import { StoreProduct } from '@/app/page'
import { AddToCartButton } from '@/components/AddToCartButton'

export default async function Product({ params }: { params: { id: string } }) {
    const product: StoreProduct = await fetch(`https://fakestoreapi.com/products/${params.id}`).then((res) => res.json())

    return (
        <div className='p-4 max-w-xl mx-auto'>
            <img src={product.image} alt={`product ${product.title}`} className='h-64 mx-auto' />
            <h2 className='text-xl font-bold mt-4'>{product.title}</h2>
            <p className='my-4'>{product.description}</p>
            <p className='font-bold text-lg'>${product.price}</p>
            <AddToCartButton product={product} />
        </div>
    )
}