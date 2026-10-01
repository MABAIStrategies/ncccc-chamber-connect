// Vercel serverless function: server-side proxy for the Google Sheet feed.
// Keeps the Apps Script URL and token out of the browser; CDN caches for 10s.
module.exports = async function handler(req, res) {
  const url = process.env.SHEET_FEED_URL;
  const token = process.env.SHEET_FEED_TOKEN;
  if (!url || !token) {
    res.status(500).json({ ok: false, error: 'feed not configured' });
    return;
  }
  try {
    const upstream = await fetch(url + '?token=' + encodeURIComponent(token), { redirect: 'follow' });
    if (!upstream.ok) throw new Error('upstream HTTP ' + upstream.status);
    const data = await upstream.json();
    if (!data || data.ok !== true || !Array.isArray(data.members)) {
      throw new Error((data && data.error) || 'bad upstream payload');
    }
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=60');
    res.status(200).json(data);
  } catch (err) {
    console.error('members feed failed:', err && err.message ? err.message : err);
    res.status(502).json({ ok: false, error: 'feed unavailable' });
  }
};
