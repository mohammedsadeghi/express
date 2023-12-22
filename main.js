const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

// ... (database connection and routes will go here)
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mohammad116040.",
  database: "Sadeghi_mohandes",
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 2,
  port: 3306,
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.get("/data", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM Sadeghi_mohandes.authors");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post("/data", async (req, res) => {
  // ... (handle data insertion)
});

// ... (define other routes as needed)
