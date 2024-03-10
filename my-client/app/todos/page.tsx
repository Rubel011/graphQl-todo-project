"use client";
import { gql, useQuery } from "@apollo/client";
import React from "react";
// const client = new ApolloClient({
//   uri: "http://localhost:8080/graphql",
//   cache: new InMemoryCache(),
// });
const GET_API_DATA = gql`
  query DATA {
    getTodos {
      id
      title
      user {
        name
        id
      }
    }
  }
`;
const TodoPage = () => {
  const { data } = useQuery(GET_API_DATA);
  // if (data)
  // console.log(data?.getTodos);

  return <div>TodoPage</div>;
};

export default TodoPage;
