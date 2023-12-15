import Button from '@/components/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center text-green-500">
      <h1 className="text-primary flex text-5xl font-semibold leading-snug lg:text-6xl">
        GEPT UI
      </h1>
      <p className="text-secondary mt-6 max-w-lg text-center text-4xl leading-snug md:max-w-full">
        The library for web and native user interfaces
      </p>
      <Button className="mt-10">
        <Link href="/componentes">Começar</Link>
        <ArrowRight className="ml-1" />
      </Button>
    </main>
  )
}
