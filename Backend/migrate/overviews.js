const con = require("../connection");

con.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
    return;
  }

  const create = `
    CREATE TABLE IF NOT EXISTS overviews (
      id INT AUTO_INCREMENT PRIMARY KEY,
      time VARCHAR(255),
      value VARCHAR(255),
      goal_name VARCHAR(255),
      goal_value VARCHAR(255)
    )
  `;

  var data = [
    {
      time: "10:00",
      value: 40,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "12:00",
      value: 55,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "13:00",
      value: 14,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "14:00",
      value: 71,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "15:00",
      value: 27,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "16:00",
      value: 13,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "17:00",
      value: 52,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "18:00",
      value: 52,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "19:00",
      value: 20,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "20:00",
      value: 57,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "21:00",
      value: 60,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "22:00",
      value: 27,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "23:00",
      value: 13,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "00:00",
      value: 21,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "01:00",
      value: 52,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "02:00",
      value: 52,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "03:00",
      value: 20,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "04:00",
      value: 57,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "05:00",
      value: 60,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "06:00",
      value: 52,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "07:00",
      value: 20,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "08:00",
      value: 75,
      goal_name: "Average",
      goal_value: 21,
    },
    {
      time: "09:00",
      value: 60,
      goal_name: "Average",
      goal_value: 21,
    },
  ];

  con.query(create, (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created successfully");

      let insertCount = 0;
      data.map((item, index) => {
        const insert = `INSERT INTO overviews (time, value, goal_name, goal_value) VALUES ('${item.time}', '${item.value}', '${item.goal_name}', '${item.goal_value}')`;

        con.query(insert, (err, result) => {
          if (err) {
            console.error("Error inserting data:", err);
          } else {
            console.log("Data created successfully");
          }
          insertCount++;
          if (insertCount === data.length) {
            con.end();
          }
        });
      });
    }
  });
});
