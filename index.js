import { createServer, get } from "http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONResponse } from "./utils/utiliy.js";
import { getDataByPathParams } from "./utils/utiliy.js";
import { getDataByQueryParams } from "./utils/utiliy.js";

const hostname = "127.0.0.1";
const port = 8000;

const server = createServer(async (req, res) => {
  const destination = await getDataFromDB();

  const urlObject = new URL(req.url, `http://${req.headers.host}`);

  const queryObj = Object.fromEntries(urlObject.searchParams.entries());

  if (urlObject.pathname === "/api" && req.method === "GET") {

    let filteredData = getDataByQueryParams(destination, queryObj)
    sendJSONResponse(res, 200, filteredData);

  } else if (req.url.startsWith("/api/continents") && req.method === "GET") {

    const continent = req.url.split("/").pop();
    const filteredData = getDataByPathParams(destination, "continent", continent);
    sendJSONResponse(res, 200, filteredData);
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = getDataByPathParams(destination, "country", country);
    sendJSONResponse(res, 200, filteredData);
  } else {

    sendJSONResponse(res, 404, { error: "Not Found" });

  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
