export type ProjectKind = 'private' | 'public'

export interface PortfolioProject {
  id: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  kind: ProjectKind
  category: string
  image?: string
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export interface GithubProject {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  updated_at: string
}
