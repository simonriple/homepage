import { Stack } from '@chakra-ui/react'
import { IProject } from '../model/project'
import { Project } from './Project'

export const Projects = ({ projectData }: { projectData: IProject[] }) => {
  return (
    <Stack>
      {projectData.map((project, id) => (
        <Project key={id} {...project} />
      ))}
    </Stack>
  )
}
