const con = require("../connection");

con.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
    return;
  }

  const create = `
    CREATE TABLE IF NOT EXISTS recyclable (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(255),
      value DECIMAL(7, 5)
    )
  `;

  var data = [
    {
      type: "Recyclable",
      value: 4.4
    },
    {
      type: "Recyclable",
      value: 5.5
    },
    {
      type: "Recyclable",
      value: 4.1
    },
    {
      type: "Recyclable",
      value: 6.7
    },
    {
      type: "Recyclable",
      value: 2.2
    },
    {
      type: "Non-Recyclable",
      value: 1.3
    },
    {
      type: "Non-Recyclable",
      value: 2.3
    },
    {
      type: "Non-Recyclable",
      value: 2.2
    },
    {
      type: "Non-Recyclable",
      value: 0.8
    },
    {
      type: "Non-Recyclable",
      value: 1.3
    }
  ];

  con.query(create, (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created successfully");

      let insertCount = 0;
      data.map((item, index) => {
        const insert = `INSERT INTO recyclable (type, value) VALUES ('${item.type}', '${item.value}')`;

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
