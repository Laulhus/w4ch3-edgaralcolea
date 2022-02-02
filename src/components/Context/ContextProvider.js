import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [callStatus, setCallStatus] = useState("off");
  const [markedNumbers, setMarkedNumbers] = useState([1, 2, 3]);

  const toggleCallStatus = () => {
    setCallStatus(callStatus === "off" ? "calling" : "off");
  };

  return (
    <Context.Provider value={{ callStatus, markedNumbers, toggleCallStatus }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
