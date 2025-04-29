const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors()); // Allow all origins (or restrict later)
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://temp-demo-2-client.onrender.com",
  })
);


app.get("/", (req,res)=>{
    res.send('my basic server')
})
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from server! connected succefully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
