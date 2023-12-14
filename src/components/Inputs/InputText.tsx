import { Input } from './Input'

export const InputText = ({ ...rest }) => {
  return <Input type="text" className="outline-none" {...rest} />
}
