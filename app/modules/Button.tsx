import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react'

export const Button = ({
  selected,
  children,
  ...rest
}: PropsWithChildren<{ selected?: boolean }> &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  const unselectedClass =
    'rounded-md border-secondary border-2 text-secondary p-2 m-3 backdrop-blur-[2px] hover:bg-secondary/60 hover:border-white hover:text-white glow-box'
  const seletedClass =
    'rounded-md border-2 p-2 m-3 bg-secondary/60 backdrop-blur-[2px] border-white text-white glow-box'
  return (
    <button className={selected ? seletedClass : unselectedClass} {...rest}>
      {children}
    </button>
  )
}
