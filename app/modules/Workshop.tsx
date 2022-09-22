import Image from 'next/image'
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Text,
  Stack,
  Center,
} from '@chakra-ui/react'
import { urlFor } from '../imageUrl'
import Link from 'next/link'
import { FaGithub, FaPlayCircle } from 'react-icons/fa'
import { IWorkshop } from '../model/workshop'

export const Workshop = ({
  title,
  mainImage,
  description,
  githubLink,
  appLink,
}: IWorkshop) => {
  return (
    <Box p={5} shadow='md' borderRadius='lg' bg='grey'>
      <Stack>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        {mainImage && (
          <Box
            width='100%'
            minWidth='100px'
            height='250px'
            position='relative'
            borderRadius='lg'
            overflow='hidden'
          >
            <Image
              src={urlFor(mainImage).width(800).url()}
              objectFit='cover'
              layout='fill'
            />
          </Box>
        )}
        <Center>
          <HStack>
            {githubLink && (
              <Link href={githubLink}>
                <IconButton
                  aria-label='github'
                  variant='ghost'
                  colorScheme='grey'
                  icon={<FaGithub size={28} />}
                />
              </Link>
            )}
            {appLink && (
              <Link href={appLink}>
                <IconButton
                  aria-label='try it'
                  variant='ghost'
                  colorScheme='grey'
                  icon={<FaPlayCircle size={28} />}
                />
              </Link>
            )}
          </HStack>
        </Center>
      </Stack>
    </Box>
  )
}
