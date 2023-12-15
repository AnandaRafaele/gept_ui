interface InputLabelProps {
  label: string
}

export const InputLabel = ({ label }: InputLabelProps) => {
  return <label className="mr-2">{label}:</label>
}
