const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const { default: axios } = require("axios")
async function startServer() {
    const app = express();
    app.use(express.json());

    app.use(cors());

    const server = new ApolloServer({
        typeDefs: `
        type Todo{
        id:ID!
        title:String!
        completed:Boolean!
        }

        type Query{
            getTodos:[Todo]
        }
        `,

        resolvers: { Query: { getTodos: async () => (await axios.get('https://jsonplaceholder.typicode.com/todos')).data } },
    });


    await server.start();
    app.use("/graphql", expressMiddleware(server));

    // app.get("/data",async(req,res)=>{
    //     const data=await axios.get('https://jsonplaceholder.typicode.com/todos')

    //     res.send(data)

    // })

    app.listen(8080, () => { console.log("server is running at port 8080") });
}

startServer();
