const router = require("express").Router();
const conn   = require("../db/dbConnection");
const authorized=require("../middleware/authorize");
  //Admin [add , update ,delete ,list]
//add
router.post("/add",authorized,(req,res)=>{
        res.status(200).json({
            msg:"car added",
        });
    });
  //update
    router.put("/update",(req,res)=>{
    res.status(200).json({
        msg:"car updated",
    });
});
  //delte
    router.delete("/delete",(req,res)=>{
    res.status(200).json({
        msg:"car deleted",
    });
});
  //list
    router.get("",(req,res)=>{
    res.status(200).json({
        cars:[],
    });
});
  //review
    router.post("/review",(req,res)=>{
    res.status(200).json({
        msg:"review added",
    });
});
  //favourite
    router.post("/favourite",(req,res)=>{
    res.status(200).json({
        msg:"favourite car added",
    });
});
module.exports =router;
