import { AxiosResponse } from "axios";
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const { default: axios } = require("axios");
async function startServer() {
  const app = express();
  app.use(express.json());

  app.use(cors());
  interface Parent {}
  interface User {
    id: string;
  }
  interface Todo {
    userId: string;
    id: string;
    title: string;
  }
  const server = new ApolloServer({
    typeDefs: `
        type Todo{
        id:ID!
        title:String!
        completed:Boolean!
        user:User
        }
        type User {
          id:ID!
          name:String!
          username:String!
        }
        type Query{
            getTodos:[Todo]
            getAllUsers:[User]
            getUser(id:ID!):User
        }
        `,

    resolvers: {
      Todo: {
        user: async (todo: Todo) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            )
          ).data,
      },
      Query: {
        getTodos: async (): Promise<Todo> => {
          const value: AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
          );
          return value.data;
        },
        getAllUsers: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
        getUser: async (parent: Parent, { id }: { id: string }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data,
      },
    },
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  // app.get("/data",async(req,res)=>{
  //     const data=await axios.get('https://jsonplaceholder.typicode.com/todos')

  //     res.send(data)

  // })

  app.listen(8080, () => {
    console.log("server is running at port 8080");
  });
}

startServer();
