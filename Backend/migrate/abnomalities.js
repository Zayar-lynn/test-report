const con = require("../connection");

con.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
    return;
  }

  const create = `
    CREATE TABLE IF NOT EXISTS abnomalities (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      status VARCHAR(255),
      date TIMESTAMP,
      alert VARCHAR(255)
    )
  `;

  var data = [
    {
        title: "Plug is open",
        status: "Active",
        alert: "Plug open"
    },
    {
        title: "Plug is closed",
        status: "Active",
        alert: "Plug closed"
    },
    {
        title: "Plug is open",
        status: "Active",
        alert: "Plug open"
    },
    {
        title: "Plug is closed",
        status: "Active",
        alert: "Plug closed"
    },
    {
        title: "Plug is open",
        status: "Active",
        alert: "Plug open"
    },
  ]

  con.query(create, (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created successfully");
      let insertCount = 0;
      data.map((item, index) => {
        const insert = `INSERT INTO abnomalities (title, status, date, alert) VALUES ('${item.title}', '${item.status}', '2023-06-18 12:52:09', '${item.alert}')`;

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
      })
    }
  });
});
