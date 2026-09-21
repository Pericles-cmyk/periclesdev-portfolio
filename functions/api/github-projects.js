const USERNAME = 'Pericles-cmyk'
const PORTFOLIO_TOPIC = 'portfolio'

export async function onRequestGet(context) {
  try {
    const headers = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'PericlesDev-Portfolio',
    }

    if (context.env?.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${context.env.GITHUB_TOKEN}`
    }

    const githubResponse = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
      { headers },
    )

    if (!githubResponse.ok) {
      throw new Error(`GitHub API: ${githubResponse.status}`)
    }

    const repos = await githubResponse.json()
    const projects = repos
      .filter((repo) => !repo.fork && !repo.archived && (repo.topics || []).includes(PORTFOLIO_TOPIC))
      .map(({ fork, archived, ...repo }) => ({ ...repo, topics: repo.topics || [] }))

    return new Response(
      JSON.stringify({ projects, syncedAt: new Date().toISOString() }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        projects: [],
        error: error instanceof Error ? error.message : 'Falha ao consultar o GitHub',
      }),
      {
        status: 502,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      },
    )
  }
}
