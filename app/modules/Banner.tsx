import { Button } from './Button'

export const Banner = () => {
  return (
    <div className='pt-40'>
      <h1 className='text-6xl glow-text'>Hi, I'm Simon</h1>
      <p className='text-xl text-secondary'>Multi-talent from Bergen</p>
      <a href='mailto:simon.riple@gmail.com'>
        <Button>Contact me</Button>
      </a>
    </div>
  )
}
