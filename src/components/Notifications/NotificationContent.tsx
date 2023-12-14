interface NotificationContentProps {
  text: string
}

export const NotificationContent = ({ text }: NotificationContentProps) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="text-zinc-600 text-sm leading-relaxed">{text}</p>
      <div className="text-xxs text-zinc-400 flex items-center gap-1">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  )
}
