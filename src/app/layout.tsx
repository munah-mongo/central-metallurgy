import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Central Metallurgical Kenya & Labs",
  description:
    "Central Metallurgical Kenya and Labs is a premier metallurgical testing laboratory dedicated to delivering accurate and insightful material analysis. With advanced technology and a skilled team, we serve diverse industries, ensuring quality, compliance, and informed decision-making. Trust us to uncover the hidden properties of your materials and drive excellence in your products.",
  twitter: {
    
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
