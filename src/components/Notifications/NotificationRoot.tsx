import { ReactNode } from 'react'

export const NotificationRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-zinc-200 flex items-start gap-6 px-8 py-4">
      {children}
    </div>
  )
}
