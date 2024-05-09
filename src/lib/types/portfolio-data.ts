import { Project } from './project'
import { ProjectInDevelopment } from './project-in-development'

export interface PortfolioData {
  projects: Project[]
  projectsInDevelopment: ProjectInDevelopment[]
}
