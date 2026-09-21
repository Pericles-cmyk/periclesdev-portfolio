const USERNAME = 'Pericles-cmyk'
const PORTFOLIO_TOPIC = 'portfolio'

function githubHeaders(env) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'PericlesDev-Portfolio',
  }

  if (env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`
  }

  return headers
}

async function getGithubProjects(env) {
  const githubResponse = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
    { headers: githubHeaders(env) },
  )

  if (!githubResponse.ok) {
    throw new Error(`GitHub API: ${githubResponse.status}`)
  }

  const repos = await githubResponse.json()
  const projects = repos
    .filter((repo) => !repo.fork && !repo.archived && repo.name !== 'periclesdev-portfolio' && (repo.topics || []).includes(PORTFOLIO_TOPIC))
    .map(({ fork, archived, ...repo }) => ({ ...repo, topics: repo.topics || [] }))

  return jsonResponse({ projects, syncedAt: new Date().toISOString() })
}

async function getGithubProfile(env) {
  const githubResponse = await fetch(
    `https://api.github.com/users/${USERNAME}`,
    { headers: githubHeaders(env) },
  )

  if (!githubResponse.ok) {
    throw new Error(`GitHub API: ${githubResponse.status}`)
  }

  const profile = await githubResponse.json()

  return jsonResponse({
    profile: {
      login: profile.login,
      name: profile.name,
      bio: profile.bio,
      avatar_url: profile.avatar_url,
      html_url: profile.html_url,
    },
    syncedAt: new Date().toISOString(),
  })
}

function jsonResponse(payload, status = 200) {
  return new Response(
    JSON.stringify(payload),
    {
      status,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=300, s-maxage=900, stale-while-revalidate=3600',
      },
    },
  )
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    try {
      if (url.pathname === '/api/github-projects') {
        return await getGithubProjects(env)
      }

      if (url.pathname === '/api/github-profile') {
        return await getGithubProfile(env)
      }
    } catch (error) {
      return jsonResponse(
        {
          error: error instanceof Error ? error.message : 'Falha ao consultar o GitHub',
        },
        502,
      )
    }

    return env.ASSETS.fetch(request)
  },
}
