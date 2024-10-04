import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import AllRoute from "./routes/AllRoute";
// import UploadImage from "./components/Upload";
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

function App() {
  const { data, loading } = useQuery(GET_API_DATA);
  console.log(data);
  useEffect(() => {}, [loading]);

  return (
    <div className="App">
      <AllRoute />
    </div>
  );
}

export default App;
