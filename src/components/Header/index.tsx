import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="grid w-full grid-cols-3 bg-green-300 p-6 text-green-100">
      <h1 className="text-2xl font-bold">
        <Link href={'/'}>GEPT UI</Link>
      </h1>
      <div className="flex rounded-full border border-solid border-green-50">
        <input
          type="text"
          className="h-full w-full rounded-l-full bg-green-50 px-2 text-sm text-green-900 outline-none"
          placeholder="Procurar..."
        />
        <button className="flex h-full items-center justify-center rounded-r-full bg-green-500 px-2 text-green-50   hover:bg-green-300">
          <small>Procurar</small>
        </button>
      </div>
    </header>
  )
}

export default Header
