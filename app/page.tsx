import Link from 'next/link';
export const metadata = {
  title: 'Next.js playground',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
