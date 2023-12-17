'use client'
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

export type Item = {
    id: string;
    itemName: string;
    purchased: boolean;
    createdAt: Date;
}

export type ItemsContext = {
    items: Item[];
    handleAddItem: (item: string) => void;
    toggleItemAsPurchased: (id: string) => void;
    handleDeleteItem: (id: string) => void;
}

export const itemsContext = createContext<ItemsContext | null>(null);

export function ItemsProvider({ children }: { children: ReactNode }) {

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        try {
            const storedItems = localStorage.getItem("items") || "[]";
            setItems(JSON.parse(storedItems) as Item[]);
        } catch (e) {
            console.error("Erro ao carregar itens do localStorage", e);
        }
    }, []);

    function handleAddItem(itemName: string) {
        setItems((prev) => {
            const newItems: Item[] = [
                {
                    id: Math.random().toString(),
                    itemName,
                    purchased: false,
                    createdAt: new Date(),
                },
                ...prev
            ];
            localStorage.setItem("items", JSON.stringify(newItems));
            return newItems
        })
    }

    const toggleItemAsPurchased = (id: string) => {
        setItems((prev) => {
            const newItems = prev.map((item) => {
                if (item.id === id) {
                    return { ...item, purchased: !item.purchased }
                }
                return item;
            })
            localStorage.setItem("items", JSON.stringify(newItems));
            return newItems
        })
    }

    function handleDeleteItem(id: string) {
        setItems((prev) => {
            const newItems = prev.filter((item) => item.id !== id)
            localStorage.setItem("items", JSON.stringify(newItems));
            return newItems
        })
    }

    return (
        <itemsContext.Provider value={{ items, handleAddItem, toggleItemAsPurchased, handleDeleteItem }}>
            {children}
        </itemsContext.Provider>
    )
}

export function useItems() {
    const itemsContextValue = useContext(itemsContext);
    if (!itemsContextValue) {
        throw new Error('useItems used outside of Provider')
    }

    return itemsContextValue
}