'use client'

export default function Error({ error }: { error: Error }) {
    return (
        <div className="text-center p-10">
            <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
            <p className="mt-2 text-gray-700">{error.message}</p>
        </div>
    )
}