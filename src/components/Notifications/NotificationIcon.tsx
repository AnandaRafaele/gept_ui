import { ElementType } from 'react'

interface NotificationIconProps {
  icon: ElementType
}

export const NotificationIcon = ({ icon: Icon }: NotificationIconProps) => {
  return <Icon className="text-violet-500 mt-3 h-6 w-6" />
}
