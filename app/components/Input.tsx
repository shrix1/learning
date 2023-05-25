import React, { forwardRef } from "react"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,

  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "border-2 border-lime-200 p-3 rounded-md text-black bg-lime-100",
        className
      )}
      {...props}
    />
  )
}

export default Input
