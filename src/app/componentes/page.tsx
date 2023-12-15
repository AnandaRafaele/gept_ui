import Button from '@/components/Button'
import { Input } from '@/components/Inputs'
import { LoaderIcon, Lock, Mail, Search, User } from 'lucide-react'

const Componentes: React.FC = () => {
  return (
    <main className="flex w-full flex-col px-48 text-green-500">
      <h1 className="mb-12 mt-16 text-2xl font-semibold">
        Componentes Overview
      </h1>

      {/* BUTTONS */}
      <div>
        <h3 className="text-xl">Buttons</h3>
        <div className="flex justify-center gap-2 rounded border border-green-300 p-4">
          <Button>Entrar</Button>
          <Button mod="DISABLED">Disabled</Button>
          <Button mod="OUTLINE">Outlined</Button>
          <Button icon={Search} size="18px" />
          <Button icon={Search} mod="OUTLINE" size="18px" />
          <Button icon={Search} mod="DISABLED" size="18px" />
          <Button icon={Search} size="18px">
            Começar
          </Button>
          <Button icon={Search} mod="OUTLINE" size="18px">
            Começar
          </Button>
          <Button />
        </div>
      </div>

      {/* INPUTS */}
      <div>
        <h3 className="text-xl">Inputs</h3>
        <div className="flex w-full flex-wrap justify-center gap-2 rounded border border-green-300 p-4">
          <Input.Root>
            <Input.Icon icon={Lock} />
            <Input.Password placeholder="Digite sua senha..." />
          </Input.Root>

          <Input.Root>
            <Input.Icon icon={Mail} />
            <Input.Text placeholder="Digite seu email..." />
          </Input.Root>

          <Input.Root>
            <Input.Search placeholder="Digite seu email..." />
          </Input.Root>

          <Input.Root>
            <Input.Email placeholder="Digite seu email..." />
          </Input.Root>

          <Input.Root>
            <Input.Label label="Email" />
            <Input.Email placeholder="Digite seu email..." />
          </Input.Root>
        </div>
      </div>
    </main>
  )
}

export default Componentes
