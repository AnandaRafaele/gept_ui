'use client'

import { useState } from 'react'
import { Input } from './Input'
import { InputVisibilityValue } from './InputVisibilityValue'

export const InputPassword = ({ ...rest }) => {
  const [showInputValue, setShowInputValue] = useState(false)

  return (
    <>
      <Input
        type={showInputValue ? 'text' : 'password'}
        id={rest.id}
        {...rest}
      />
      <InputVisibilityValue
        showInputValue={showInputValue}
        setShowInputValue={() => setShowInputValue(!showInputValue)}
      />
    </>
  )
}
