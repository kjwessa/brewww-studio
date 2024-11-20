import { RichText } from '@/components/RichText/index'
import React from 'react'
import { Width } from '../Width'

type Props = {
  message: Record<string, any>
  type?: 'error' | 'success' | 'warning'
  className?: string
  width?: string | number
}

export const Message: React.FC<Props> = ({ message, type, className = 'my-12', width = '100' }) => {
  const messageClassNames = {
    error: 'bg-red-100 text-red-900',
    success: 'bg-green-100 text-green-900',
    warning: 'bg-yellow-100 text-yellow-900',
  }

  if (!message) return null

  return (
    <Width className={className} width={width}>
      {type ? (
        <div className={messageClassNames[type]}>
          <RichText
            content={message}
            enableProse={false}
            customClasses={{
              paragraph: 'text-body-medium',
            }}
          />
        </div>
      ) : (
        <RichText content={message} />
      )}
    </Width>
  )
}
