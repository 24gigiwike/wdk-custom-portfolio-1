import type { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    className?: string
    type?: 'button' | 'submit'
}

export function Button({ children, className, type }: ButtonProps) {
    return (
        <button className={className} type={type}>
            {children}
        </button>
    )
}
