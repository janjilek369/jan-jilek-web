export default async function handler(_req, res) {
  try {
    const response = await fetch('https://jilekjan.substack.com/feed', {
      headers: { 'Accept': 'application/rss+xml, application/xml, text/xml' },
    })
    if (!response.ok) throw new Error(`Feed returned ${response.status}`)
    const text = await response.text()
    res.setHeader('Content-Type', 'application/xml; charset=utf-8')
    res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=60')
    res.status(200).send(text)
  } catch (err) {
    res.status(502).json({ error: 'Failed to fetch feed' })
  }
}
