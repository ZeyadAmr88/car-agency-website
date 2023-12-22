const router                     = require("express").Router();
const conn                       = require("../db/dbConnection");
const authorized                 = require("../middleware/authorize");
const admin                      = require("../middleware/admin");
const { body, validationResult } = require("express-validator");
const util                       = require("util");
const upload                     = require("../middleware/uploadimages");
const fs                         = require("fs");
const multer                     = require("multer");

const { log, error }                    = require("console");
const { query } = require("express");

    //Admin [add , update ,delete ,list]

  //add

router.post("/add",
admin,
upload.single("image"),
body("model").isString()
.withMessage("please enter a valid model"),
body("year").isString()
.withMessage("please enter car year"),
body("price").isString()
.withMessage("please enter car price")
,async(req, res) => {
    try{

      // VALIDATION REQUEST
    
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
}
// VALIDATE THE IMAGE
if(!req.file){
    return res.status(400).json({
        errors: [
            {
                msg: "image is Required",
            },
            ],
        });
}
    //PREPARE CAR OBJECT
const car = {
    model: req.body.model,  
    price: req.body.price,
    year : req.body.year,
    img_url:req.file.originalname,
};
  // INSERT CAR INTO DB 
const query = util.promisify(conn.query).bind(conn);
await query("insert into car set ?",car);
res.status(200).json({
    msg:"car added successfully",
});

}catch(err){
console.log(err);
res.status(500).json(err);
}
});

  //update

router.put("/update", admin, (req, res) => {
    res.status(200).json({
    msg: "car updated",
    });
});

    //delete


    router.delete("/:car_id", //params
    admin,
    async (req, res) => {
        try{
    //check car exist or no
const query = util.promisify(conn.query).bind(conn);
const cars  = await query(" select * from car where car_id = ?",[
    req.params.car_id,
]);
if(!cars[0]){
res.status(404).json({msg:"car not found"});
}
  //REMOVE CAR IMAGE
fs.unlinkSync("./upload/"+cars[0].img_url);
await query("delete form car where car_id =?",[cars[0].car_id]);
res.status(200).json({
    msg:"car deleted successfully",
});
}catch(err){

    console.log(err);
    res.status(500).json(err);
    }
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
