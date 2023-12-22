const router = require("express").Router();
const conn = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
//Admin [add , update ,delete ,list]
//add
router.post("/add", admin, (req, res) => {
  res.status(200).json({
    msg: "car added",
  });
});
//update
router.put("/update", admin, (req, res) => {
  res.status(200).json({
    msg: "car updated",
  });
});
//delete
router.delete("/delete", admin, (req, res) => {
  res.status(200).json({
    msg: "car deleted",
  });
});
//list
router.get("", (req, res) => {
  res.status(200).json({
    cars: [],
  });
});
//review
router.post("/review", (req, res) => {
  res.status(200).json({
    msg: "review added",
  });
});
//favourite
router.post("/favourite", authorized, (req, res) => {
  res.status(200).json({
    msg: "favourite car added",
  });
});
module.exports = router;
