import createGraphqlServer from "./graphql";
const express = require("express");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
async function startServer() {
  const app = express();
  const PORT=process.env
  app.use(express.json());

  app.use(cors());

  const startGqlServer = await createGraphqlServer();
  app.use("/graphql", expressMiddleware(startGqlServer));

  app.listen(8080, () => {
    console.log("server is running at port 8080");
  });
}

startServer();
