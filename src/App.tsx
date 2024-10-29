import React from "react";
import env from "react-dotenv";

const App = () => {
  return <div>{env.API_URL}</div>;
};

export default App;
