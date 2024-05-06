import { Project } from './project'
import { ProjectInDevelopment } from './project-in-development'

export interface PortfolioLocaleData {
  projects: Project[]
  projectsInDevelopment: ProjectInDevelopment[]
}
