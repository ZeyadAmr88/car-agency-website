const router = require("express").Router();
const conn = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { validationResult } = require("express-validator");
const fs = require("fs");
//Admin [add , update ,delete ,list]
//add
router.post("/add", admin, (req, res) => {
  res.status(200).json({
    msg: "car added",
  });
});
//update
router.put(
  "/update/:id",
  admin,
  upload.single("image"),
  body("model").isString().withMessage("please enter a valid car model"),
  body("description")
    .isString()
    .withMessage("please enter a valid description"),
  async (req, res) => {
    try {
      const query = util.promisify(conn.query).bind(conn);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const car = await query("select * from car where id = ?", [
        req.params.id,
      ]);

      if (!car[0]) {
        res.status(404).json({ ms: "car not found !" });
      }

      const carObj = {
        model: req.body.model,
        description: req.body.description,
        price: req.body.price,
        year: req.body.year,
      };

      if (req.file) {
        carObj.img_url = req.file.filename;
        fs.unlinkSync("./upload/" + car[0].img_url);
      }

      await query("update car set ? where id = ?", [carObj, car[0].id]);
      res.status(200).json({
        msg: "car updated",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);
//delete
router.delete("/delete", admin, (req, res) => {
  res.status(200).json({
    msg: "car deleted",
  });
});
//list & search
router.get("", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  let search = "";
  if (req.query.search) {
    search = `where model LIKE '%${req.query.search}%`;
  }
  const cars = await query(`select * from car ${search}`);
  cars.map((car) => {
    car.img_url = "http://" + req.hostname + ":4000" + "/" + car.img_url;
  });
  res.status(200).json(cars);
});

// show
router.get("/:id", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  const cars = await query("select * from car where id = ?", req.params.id);
  if (!cars[0]) {
    res.status(404).json({ ms: "car not found !" });
  }
  cars[0].img_url = "http://" + req.hostname + ":4000" + "/" + cars[0].img_url;
  res.status(200).json(cars[0]);
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
