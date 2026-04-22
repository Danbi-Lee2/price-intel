export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { query, display = '10' } = req.query;
  if (!query) return res.status(400).json({ error: 'query required' });

  const response = await fetch(
    `https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(query)}&display=${display}&sort=sim`,
    {
      headers: {
        'X-Naver-Client-Id': 'GZeeURHXNPoK0BSUfoq0',
        'X-Naver-Client-Secret': 'Vn_V2s1Meo',
      }
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
