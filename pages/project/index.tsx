import { CloseIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  Collapse,
  Container,
  Heading,
  HStack,
  IconButton,
  ScaleFade,
  Slide,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '../../modules/Header'
import { projects } from './data'

const Project = ({
  id,
  selectedProject,
  selectProject,
  unselectProject,
  title,
  shortDescription,
  description,
  tags,
}) => {
  return (
    <Collapse in={selectedProject === undefined || selectedProject === id}>
      <Box p={5} shadow='md' borderRadius='lg' bg='grey'>
        <Box onClick={() => selectProject()}>
          <Heading>{title}</Heading>
          {selectedProject === undefined && <Text>{shortDescription}</Text>}
          <HStack>
            {tags.map((tag) => (
              <Tag bg='orange.500' color='white'>
                {tag}
              </Tag>
            ))}
          </HStack>
        </Box>
        <Collapse in={selectedProject === id}>
          <Text>{description}</Text>
        </Collapse>
      </Box>
    </Collapse>
  )
}

const Projects: NextPage = () => {
  const router = useRouter()
  const { prev } = router.query
  const [selectedProject, setSelectedProject] = useState(Number(prev))
  useEffect(() => {
    setTimeout(() => setSelectedProject(undefined), 50)
  }, [])
  return (
    <>
      <Header />
      <Container as='main' maxW='container.xl'>
        <Stack>
          {projects.map((project, id) => (
            <Project
              key={id}
              id={id}
              selectedProject={selectedProject}
              selectProject={() => {
                setSelectedProject(id)
                setTimeout(() => router.push(`/project/${id}`), 150)
              }}
              unselectProject={() => setSelectedProject(undefined)}
              {...project}
            />
          ))}
        </Stack>
      </Container>
    </>
  )
}

export default Projects
