const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());

app.get("/address", (req, res) => {
  const options = {
    method: "GET",
    url: `https://vpn-proxy-detection.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=8.8.8.8`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => console.log("listening on " + PORT));
