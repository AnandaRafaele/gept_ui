import { LucideProps } from 'lucide-react'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

enum ButtonStyle {
  DISABLED = 'disabled bg-zinc-300 text-zinc-500 hover:bg-zinc-300 cursor-not-allowed',
  DEFAULT = '',
  OUTLINE = 'bg-green-50 hover:bg-green-100 text-green-300 border border-green-300',
}

type ButtonProps = ComponentProps<'button'> & {
  children?: ReactNode
  mod?: keyof typeof ButtonStyle
  icon?: ElementType<LucideProps>
  size?: string | number
}

const Button = ({
  children,
  mod = 'DEFAULT',
  icon: Icon,
  size,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        `flex items-center justify-center rounded-full bg-green-300 px-4 py-2 font-semibold text-green-50 hover:bg-green-400 sm:w-auto sm:flex-row ${ButtonStyle[mod]}`,
        rest.className,
      )}
    >
      {Icon && <Icon size={size} className="mx-2" />}
      {children}
    </button>
  )
}

export default Button
