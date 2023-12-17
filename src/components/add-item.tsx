'use client'
import { useItems } from "@/store/items";
import { FormEvent, useState } from "react"

export function AddItem() {
    const [item, setItem] = useState("");
    const { handleAddItem } = useItems();

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleAddItem(item);
        setItem("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Escreva o nome do item" value={item} onChange={(e) => setItem(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AddItem;