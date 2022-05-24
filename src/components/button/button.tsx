import { useMemo } from 'react'
import { ReactComponent as ArrowLeft } from '../../assets/chevron-back-outline.svg'
import { ReactComponent as ArrowRight } from '../../assets/chevron-forward-outline.svg'
import { ReactComponent as ClosIcon } from '../../assets/close-outline.svg'
import './style.scss'

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
