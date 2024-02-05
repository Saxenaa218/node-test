import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "Hello lawde!!",
  });
});

app.listen(8080, () => {
  console.log("listening", 8080);
});
