import cors from "cors";
import express from "express";

import { fetchJsons, fetchOneFile, recompose } from "./utils";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/merge", async (req, res) => {
  try {
    const fileNames = req.body.names; // add a validation

    const jsons = await fetchJsons(fileNames);

    const mergedObject = Object.assign({}, ...jsons); // merging objects

    res.send(mergedObject);
  } catch (err) {
    console.log(err);
  }
});
app.get("/data/:name/:path", async (req, res) => {
  try {
    const name = req.params["name"]; // add a validation
    const path = req.params["path"];

    const fetchedFile = await fetchOneFile(name);

    const getProperty =
      fetchedFile !== null ? recompose(fetchedFile, path) : null;

    res.send(getProperty);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("Server running"));
