var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const { default: axios } = require("axios");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
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
            resolvers: { Query: { getTodos: () => __awaiter(this, void 0, void 0, function* () { return (yield axios.get('https://jsonplaceholder.typicode.com/todos')).data; }) } },
        });
        yield server.start();
        app.use("/graphql", expressMiddleware(server));
        // app.get("/data",async(req,res)=>{
        //     const data=await axios.get('https://jsonplaceholder.typicode.com/todos')
        //     res.send(data)
        // })
        app.listen(8080, () => { console.log("server is running at port 8080"); });
    });
}
startServer();
