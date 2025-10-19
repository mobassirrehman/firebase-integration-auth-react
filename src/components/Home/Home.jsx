import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Home = () => {
  const authInfo = use(AuthContext);
  console.log(authInfo);
  return <div></div>;
};

export default Home;
