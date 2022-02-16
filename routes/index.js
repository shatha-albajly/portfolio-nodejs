var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Profile Website" });
});

module.exports = router;

const PORT = process.env.PORT || 5000;

// Executing the server on given port number
app.listen(PORT, console.log(`Server started on port ${PORT}`));
