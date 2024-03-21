import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaPlayCircle } from 'react-icons/fa'
import { urlFor } from '../imageUrl'
import { IProject } from '../model/project'
import { Card } from './Card'

export const Project = ({
  title,
  mainImage,
  description,
  githubLink,
  appLink,
}: IProject) => {
  return (
    <Card>
      <h2 className='text-4xl text-white pb-2'>{title}</h2>
      <div className='flex flex-row gap-2'>
        <p className='text-md text-white'>{description}</p>
        {mainImage && (
          <div className='w-full min-w-[120px]'>
            <Image
              className='grayscale hover:grayscale-0'
              src={urlFor(mainImage).width(400).url()}
              objectFit='cover'
              width={400}
              height={600}
            />
          </div>
        )}
      </div>
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
    </Card>
  )
}
