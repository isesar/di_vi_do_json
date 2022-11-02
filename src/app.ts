import cors from "cors";
import express from "express";

import { fetchJsons, fetchOneFile, recompose } from "./utils";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/merge", async (req, res) => {
  try {
    const fileNames = req.body.names; // add a validation
    if (!fileNames || fileNames.length === 0) {
      res.send("There is no filename");
    }
    const jsons = await fetchJsons(fileNames);

    const mergedObject = Object.assign({}, ...jsons); // merging objects
    if (Object.keys(mergedObject).length === 0) {
      res.send("There are no config files found");
    }
    res.send(mergedObject);
  } catch (err) {
    console.log(err);
  }
});
app.get("/data/:name/:path", async (req, res) => {
  try {
    const name = req.params["name"]; // add a validation
    const path = req.params["path"];
    if (!name || !path) {
      res.send("Name of the config file or dotted path is undefined");
    }
    const fetchedFile = await fetchOneFile(name);
    if (!fetchedFile) {
      res.send("Could not find file");
      throw "Could not find file";
    }
    const getProperty =
      fetchedFile !== null ? recompose(fetchedFile, path) : null;

    res.send(getProperty);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("Server running"));
