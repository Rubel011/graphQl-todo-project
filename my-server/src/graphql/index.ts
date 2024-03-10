import { ApolloServer } from "@apollo/server";
import axios, { AxiosResponse } from "axios";
interface Parent {}
interface User {
  id: string;
}
interface Todo {
  userId: string;
  id: string;
  title: string;
}
async function createGraphqlServer() {
  const gqlServer = new ApolloServer({
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
          // console.log(value.data);
          return value.data;
        },
        getAllUsers: async (): Promise<User> =>
          (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
        getUser: async (parent: Parent, { id }: { id: string }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data,
      },
    },
  });

  await gqlServer.start();
  return gqlServer;
}

export default createGraphqlServer;
