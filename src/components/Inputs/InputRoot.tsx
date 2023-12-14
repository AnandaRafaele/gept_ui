import { ReactNode } from 'react'

export const InputRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white flex items-center justify-center rounded px-2 py-1">
      {children}
    </div>
  )
}
