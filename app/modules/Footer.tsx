import { Box, Center, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
export const Footer = () => {
  return (
    <Box pt='48px' pb='24px'>
      <Center>
        <Link href='https://no.linkedin.com/in/simon-riple-58a045178'>
          <IconButton
            variant='link'
            aria-label='github'
            colorScheme='orange'
            icon={<FaLinkedin size={48} />}
          />
        </Link>
      </Center>
    </Box>
  )
}
