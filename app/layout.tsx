import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shanmukha Sai Praneeth — DevOps Engineer',
  description: 'DevOps SRE Engineer | 5+ Years | AWS · CI/CD · Linux · Magento · Docker',
  keywords: ['DevOps', 'SRE', 'AWS', 'CI/CD', 'Infrastructure', 'Magento', 'Docker'],
  openGraph: {
    title: 'Shanmukha Sai Praneeth — DevOps Engineer',
    description: '5 years architecting zero-downtime infrastructure at 99.9% uptime.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
