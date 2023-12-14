import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'flex justify-center rounded-full bg-green-300 px-4 py-2 font-semibold text-green-50 hover:bg-green-400 sm:w-auto sm:flex-row',
        rest.className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
