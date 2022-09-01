let data = require("../data.json");

export default function handler(req, res) {
  let results = [];

  data.news.map((nw) =>
    results.push({
      title: nw.title,
      subtitle: nw.subtitle,
      date: nw.date,
      slug: nw.slug,
    })
  );
  res.status(200).json({
    results,
  });
}
