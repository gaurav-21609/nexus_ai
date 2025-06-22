import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Nexus AI",
  description: "Nexus AI - made by Gaurav and Saurabh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
