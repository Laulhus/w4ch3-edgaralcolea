import { useContext } from "react";
import Provider from "../Context/ContextProvider";

const Info = () => {
  const { callStatus } = useContext(Provider);
  return <span className={`message ${callStatus}`}>Calling...</span>;
};
export default Info;
