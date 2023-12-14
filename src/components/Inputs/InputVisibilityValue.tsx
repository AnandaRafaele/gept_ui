import { Eye, EyeOff } from 'lucide-react'

interface Props {
  setShowInputValue: () => void
  showInputValue: boolean
}

export const InputVisibilityValue = ({
  setShowInputValue,
  showInputValue,
}: Props) => {
  return (
    <button onClick={setShowInputValue}>
      {showInputValue ? <EyeOff /> : <Eye />}
    </button>
  )
}
