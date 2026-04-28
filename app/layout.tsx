import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shanmukha Sai Praneeth — DevOps / SRE',
  description: 'DevOps SRE Engineer · 5 Years · AWS · CI/CD · Linux · Magento · Docker',
  themeColor: '#03010a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
