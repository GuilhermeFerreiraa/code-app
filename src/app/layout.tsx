import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { PayOrderProvider } from '@/context/pay-order-context'

import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'E-commerce | Code Pay',
  description: 'From Figma to Deploy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <PayOrderProvider>
          <Header />
          {children}
          <Toaster position="bottom-center" />
        </PayOrderProvider>
      </body>
    </html>
  )
}
