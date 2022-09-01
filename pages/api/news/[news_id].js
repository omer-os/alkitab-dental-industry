let data = require("../data.json");

export default function handler(req, res) {
  const { news_id } = req.query;
  let results = [];

  results.push(data.news.filter((nw) => nw.slug === news_id));
  res.status(200).json({
    results,
  });
}

