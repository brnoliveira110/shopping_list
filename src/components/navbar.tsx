'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation"

const Navbar = () => {
    const searchParams = useSearchParams();
    const itemsFilter = searchParams.get('items')

    return (
        <nav>
            <Link href="/" className={(itemsFilter === null) ? 'list' : ''}>Histórico</Link>
            <Link href="/?items=list" className={itemsFilter === 'list' ? 'list' : ''}>Lista</Link>
            <Link href="/?items=purchased" className={itemsFilter === 'purchased' ? 'list' : ''}>Carrinho</Link>
        </nav>
    )
}

export default Navbar;