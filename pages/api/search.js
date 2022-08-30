let data = require("./data.json");

export default (req, res) => {
  const SearchTerm = req.query.q;

  const results = data.subjects.filter((item) =>
    item.name.replace("-", " ").toLowerCase().includes(SearchTerm.toLowerCase())
  );
  res.end(JSON.stringify({ results }));
};
