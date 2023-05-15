import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next sandbox',
  description: 'A next.js project that is being used as a learning sandbox',
}

export default function RootLayout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}><>
        {props.children}
        {props.team}
        {props.analytics}</></body>
    </html>
  )
}
