import { PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className='glow-box rounded-md border-4 border-secondary bg-secondary/60 backdrop-blur-[2px] mb-10 p-5 hover:border-white'>
      {children}
    </div>
  )
}
