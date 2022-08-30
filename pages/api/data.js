let data = require("./data.json");

export default function handler(req, res) {
  const { category } = req.query;

  let results = [];

  //   all categories for /index page
  if (category === "all") {
    data.subjects.map((sub) =>
      results.push({
        name: sub.name,
        icon_img: sub.icon_img,
        description: sub.description,
        files_length:sub.practical.length + sub.theoretical.length,
      })
    );
  }

  // spesific category for /subjects/[subject_name]
  else {
    results = data.subjects.filter((sub) => sub.name === category);
  }

  res.status(200).json({
    results,
  });
}
