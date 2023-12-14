import { ComponentProps } from 'react'

type InputTextProps = ComponentProps<'input'>

export const Input = ({ ...rest }: InputTextProps) => {
  return <input className="outline-none" {...rest} />
}
