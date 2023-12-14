import { Search } from 'lucide-react'
import { Input } from './Input'

export const InputSearch = ({ ...rest }) => {
  return (
    <div className="flex items-center">
      <Input type="text" placeholder="Procurar..." {...rest} />
      <button className="flex h-full items-center justify-center">
        <Search className="h-4 w-4" />
      </button>
    </div>
  )
}
