import React from "react"

// using this two packages to merge tailwind classes
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// this function will merge tailwind classes (custom class + default comp class)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

// giving custom props to the component + default type of a HTML button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string
  disabled?: boolean
  outline?: boolean
}

const Button: React.FC<ButtonProps> = ({
  name,
  disabled,
  className,
  outline,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={
        outline
          ? cn(
              "border-lime-200 border-2 text-lime-900 p-2 rounded-full",
              className
            )
          : cn("bg-lime-200 text-lime-900 p-2 rounded-full", className)
      }
      {...props}
    >
      {name}
    </button>
  )
}

export default Button

// ...props => to get default props from HTML button like addEventLister , etc..
// cn function will contain the fixed style which i wrote for this component
//      + className props will have custom style when we reuse the compoments
//      + if we r using any state to keep track of those btn then we can use {"cursor-disabled : boolean"}
