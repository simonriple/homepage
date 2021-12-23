import { CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Heading,
  HStack,
  Tag,
  Text,
  Collapse,
  Container,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Header } from '../../modules/Header'
import { projects } from './data'

const Project: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Header />
      <Container as='main' maxW='container.xl'>
        <Stack>
          <Box p={5} shadow='md' borderRadius='lg' bg='grey'>
            <Box>
              <HStack justifyContent='space-between'>
                <Heading>{projects[Number(slug)].title}</Heading>
                <IconButton
                  colorScheme='orange'
                  icon={<CloseIcon />}
                  onClick={() => router.push(`/project?prev=${slug}`)}
                  aria-label='close'
                />
              </HStack>
              <HStack>
                {projects[Number(slug)].tags.map((tag) => (
                  <Tag bg='orange.500' color='white'>
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Text>{projects[Number(slug)].description}</Text>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Project
