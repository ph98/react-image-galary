/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { useMemo } from 'react'
import './style.scss'

const ArrowLeft = require('../../assets/chevron-back-outline.svg') as string
const ArrowRight = require('../../assets/chevron-forward-outline.svg') as string
const ClosIcon = require('../../assets/close-outline.svg') as string

interface ButtonProps {
  onClick: () => void
  type: 'prev' | 'next' | 'close'
  className?: string
}
function Button({ onClick, type, className = '' }: ButtonProps) {
  const Icon = useMemo(() => {
    switch (type) {
      case 'prev':
        return <ArrowLeft />
      case 'next':
        return <ArrowRight />
      case 'close':
        return <ClosIcon />
      default:
        return null
    }
  }, [type])

  return (
    <button
      className={`button ${type} ${className || ''}`}
      type="button"
      onClick={onClick}
    >
      {Icon}
    </button>
  )
}

export default Button
