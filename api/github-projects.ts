import type { VercelRequest, VercelResponse } from '@vercel/node'

const USERNAME = 'Pericles-cmyk'
const PORTFOLIO_TOPIC = 'portfolio'

export default async function handler(_request: VercelRequest, response: VercelResponse) {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'PericlesDev-Portfolio',
    }

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const githubResponse = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
      { headers },
    )

    if (!githubResponse.ok) {
      throw new Error(`GitHub API: ${githubResponse.status}`)
    }

    const repos = await githubResponse.json() as Array<{
      id: number
      name: string
      description: string | null
      html_url: string
      homepage: string | null
      language: string | null
      topics?: string[]
      fork: boolean
      archived: boolean
      updated_at: string
    }>

    const projects = repos
      .filter((repo) => !repo.fork && !repo.archived && (repo.topics || []).includes(PORTFOLIO_TOPIC))
      .map(({ fork, archived, ...repo }) => ({ ...repo, topics: repo.topics || [] }))

    response.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    response.status(200).json({ projects, syncedAt: new Date().toISOString() })
  } catch (error) {
    response.status(502).json({
      projects: [],
      error: error instanceof Error ? error.message : 'Falha ao consultar o GitHub',
    })
  }
}
