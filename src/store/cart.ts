import { create } from 'zustand'

export type Product = { id: number; title: string; price: number }

type CarState = {
    items: Product[]
    add: (item: Product) => void
    remove: (id: number) => void
}

export const useCart = create<CarState>((set) => ({
    items: [],
    add: (item) => set((state) => ({ items: [...state.items, item] })),
    remove: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) }))
}))