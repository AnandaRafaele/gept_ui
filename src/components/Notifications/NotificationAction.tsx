import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type NotificationActionProps = ComponentProps<'button'> & {
  icon: ElementType
}

export const NotificationAction = ({
  icon: Icon,
  ...rest
}: NotificationActionProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'flex h-8 w-8 items-center justify-center rounded',
        rest.className,
      )}
    >
      <Icon className="text-zinc-50 h-3 w-3" />
    </button>
  )
}
