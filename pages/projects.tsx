import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next'

const projects = [
  {
    title: 'Test',
    description: 'Dette er et testprosjekt',
    tags: ['react', 'typescript'],
  },
  {
    title: 'Testing',
    description: 'Dette er andre testprosjektet',
    tags: ['php', 'nginx'],
  },
  {
    title: 'Tull',
    description: 'Dette er et testprosjekt',
    tags: ['fun', 'games'],
  },
  { title: 'Tøys', description: 'Dette er et testprosjekt', tags: ['php'] },
]
const Project = ({ title, description, tags }) => {
  return (
    <Box p={5} shadow='md' borderRadius='lg' bg='grey'>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        {tags.map((tag) => (
          <Tag bg='orange' color='white'>
            {tag}
          </Tag>
        ))}
      </HStack>
    </Box>
  )
}

const Projects: NextPage = () => {
  return (
    <Container maxW={'xl'}>
      <Stack>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </Stack>
    </Container>
  )
}

export default Projects
