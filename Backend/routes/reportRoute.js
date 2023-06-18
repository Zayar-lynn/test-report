const express = require("express");
const con = require("../connection");

const router = express.Router();

router.get("/abnomality", (req, res) => {
  const sql = "select * from abnomalities";

  con.query(sql, (error, result) => {
    if (error) console.log(error);
    res.json(result);
  });
});

router.get("/overview", (req, res) => {
  const sql = "select * from overviews";

  con.query(sql, (error, result) => {
    if (error) console.log(error);
    var data = [];
    result.map((item) => {
      var obj = {};
      obj.x = item.time;
      obj.y = item.value;
      obj.goals = [
        {
          name: item.goal_name,
          value: item.goal_value,
          strokeHeight: 5,
          strokeColor: '#775DD0'
        }
      ];
      data.push(obj);
    })
    res.json(data);
  });
});

router.get("/waterlevel", (req, res) => {
  const sql = "select * from waterlevels";

  con.query(sql, (error, result) => {
    if (error) console.log(error);
    res.json(result);
  });
});

router.get("/recyclable", (req, res) => {
  const sql = "select * from recyclable";

  con.query(sql, (error, result) => {
    if (error) console.log(error);

    var recyclable_data = [];
    var nonrecyclable_data = [];
    result.map((item) => {
      if(item.type == "Recyclable"){
        recyclable_data.push(item.value);
      }
      if(item.type == "Non-Recyclable"){
        nonrecyclable_data.push(item.value);
      }
    });
    var recyclable_obj = {
      name : "Recyclable",
      data: recyclable_data
    }
    var nonrecyclable_obj = {
      name : "Non-Recyclable",
      data: nonrecyclable_data
    }
    var result = [
      recyclable_obj,nonrecyclable_obj
    ]
    res.json(result);
  });
});

module.exports = router;
