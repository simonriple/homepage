import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
export const Footer = () => {
  return (
    <div className='pt-2 pb-4 flex justify-center'>
      <Link href='https://no.linkedin.com/in/simon-riple-58a045178'>
        <button aria-label='github'>
          <FaLinkedin size={48} className='text-white' />
        </button>
      </Link>
    </div>
  )
}
