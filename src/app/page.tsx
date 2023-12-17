import AddItem from '@/components/add-item';
import { Items } from '@/components/items';
import Navbar from '@/components/navbar';
import { RiTodoLine } from "react-icons/ri";
import "./globals.css";


export default function Home() {
  return (
    <main>
      <h2><RiTodoLine className="icons" /> Lista de Compras</h2>
      <Navbar />
      <AddItem />
      <Items />
    </main>
  )
}
