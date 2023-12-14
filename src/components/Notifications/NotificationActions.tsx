import { ReactNode } from 'react'

export const NotificationActions = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2 self-center">{children}</div>
}
