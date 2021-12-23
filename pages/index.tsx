import {
  Box,
  Button,
  Center,
  Circle,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Grid minW='100vw' minH='100vh'>
      <Center flexGrow='1'>
        <Circle shadow='md' bg='grey' size='500'>
          <Box>
            <Heading>Simon Riple</Heading>
            <Text>Utvikler</Text>
            <Link href='/projects'>
              <Button borderRadius='full' colorScheme='orange'>
                Projects
              </Button>
            </Link>
          </Box>
        </Circle>
      </Center>
    </Grid>
  )
}

export default Home
