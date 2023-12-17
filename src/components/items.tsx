'use client'

import { useItems } from "@/store/items"
import { useSearchParams } from "next/navigation";

export const Items = () => {
    const { items, toggleItemAsPurchased, handleDeleteItem } = useItems();
    const searchParams = useSearchParams();
    const itemsFilter = searchParams.get('items')

    let filteredItems = items;



    if (itemsFilter === 'list') {
        filteredItems = items.filter((item) => !item.purchased)
    }
    if (itemsFilter === 'purchased') {
        filteredItems = items.filter((item) => item.purchased)
    }

    return (
        <ul className="main-item">
            {
                filteredItems.map((item) => {
                    return <li key={item.id}>
                        <input
                            type="checkbox"
                            id={`item-${item.id}`}
                            checked={item.purchased}
                            onChange={() => { toggleItemAsPurchased(item.id) }}
                        />
                        <label htmlFor={`item-${item.id}`}>{item.itemName}</label>
                        {
                            item.purchased && (
                                <button type="button" onClick={() => handleDeleteItem(item.id)}>
                                    Excluir
                                </button>
                            )
                        }

                    </li>
                })
            }
        </ul>
    )
}