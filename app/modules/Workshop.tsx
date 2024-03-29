import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaPlayCircle } from 'react-icons/fa'
import { urlFor } from '../imageUrl'
import { IWorkshop } from '../model/workshop'
import { Card } from './Card'

export const Workshop = ({
  title,
  mainImage,
  description,
  githubLink,
  appLink,
}: IWorkshop) => {
  return (
    <Card>
      <h2 className='text-4xl text-white pb-2'>{title}</h2>
      <div className='flex flex-col items-center gap-2'>
        {mainImage && (
          <div>
            <Image
              className='grayscale hover:grayscale-0'
              src={urlFor(mainImage).width(400).url()}
              objectFit='contain'
              width={400}
              height={400}
            />
          </div>
        )}
        <p className='text-md text-white'>{description}</p>

        <div className='flex justify-center gap-2'>
          {githubLink && (
            <Link href={githubLink}>
              <button aria-label='github'>
                <FaGithub size={28} className='text-white' />
              </button>
            </Link>
          )}
          {appLink && (
            <Link href={appLink}>
              <button aria-label='try it'>
                <FaPlayCircle size={28} className='text-white' />
              </button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}
