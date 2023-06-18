const con = require("../connection");

con.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
    return;
  }

  const create = `
    CREATE TABLE IF NOT EXISTS waterlevels (
      id INT AUTO_INCREMENT PRIMARY KEY,
      time VARCHAR(255),
      value DECIMAL(7, 5)
    )
  `;

  var data = [
    {
      time: "09:00",
      value: 0.80000
    },
    {
      time: "10:00",
      value: 0.20000
    },
    {
      time: "11:00",
      value: 0.30000
    },
    {
      time: "12:00",
      value: 0.60000
    },
    {
      time: "13:00",
      value: 0.10000
    },
    {
      time: "145:00",
      value: 0.40000
    },
    {
      time: "15:00",
      value: 0.50000
    },
    {
      time: "16:00",
      value: 0.90000
    },
    {
      time: "17:00",
      value: 0.20000
    },
    {
      time: "18:00",
      value: 0.30000
    },
    {
      time: "19:00",
      value: 0.90000
    },
    {
      time: "20:00",
      value: 0.50000
    },
    {
      time: "21:00",
      value: 0.10000
    },
    {
      time: "22:00",
      value: 0.20000
    },
    {
      time: "23:00",
      value: 0.60000
    },
    {
      time: "00:00",
      value: 0.80000
    },
    {
      time: "01:00",
      value: 0.30000
    },
    {
      time: "02:00",
      value: 0.60000
    },
    {
      time: "0300",
      value: 0.20000
    },
    {
      time: "04:00",
      value: 0.80000
    },
    {
      time: "05:00",
      value: 0.70000
    },
    {
      time: "06:00",
      value: 0.30000
    },
    {
      time: "07:00",
      value: 0.50000
    },
    {
      time: "08:00",
      value: 0.70000
    }
  ];

  con.query(create, (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created successfully");

      let insertCount = 0;
      data.map((item, index) => {
        const insert = `INSERT INTO waterlevels (time, value) VALUES ('${item.time}', '${item.value}')`;

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
