import type { Metadata } from 'next'
import './globals.css'
import { ItemsProvider } from '@/store/items'


export const metadata: Metadata = {
  title: 'Lista de compras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ItemsProvider>
          {children}
        </ItemsProvider>
      </body>
    </html>
  )
}
