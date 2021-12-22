import {
  Box,
  Center,
  Circle,
  Container,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <HStack w='full' h='full'>
      <Center>
        <Circle shadow='md' bg='grey' size='500'>
          <Box>
            <Heading>Simon Riple</Heading>
            <Text>Utvikler</Text>
          </Box>
        </Circle>
      </Center>
    </HStack>
  )
}

export default Home
