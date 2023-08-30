import { IProject } from '../model/project'
import { Project } from './Project'

export const Projects = ({ projectData }: { projectData: IProject[] }) => {
  return (
    <div>
      {projectData.map((project, id) => (
        <Project key={id} {...project} />
      ))}
    </div>
  )
}
