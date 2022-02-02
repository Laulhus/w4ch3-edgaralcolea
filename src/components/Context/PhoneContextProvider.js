import { useState } from "react";
import PhoneContext from "./PhoneContext";

const PhoneContextProvider = ({ children }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [markedNumbers, setMarkedNumbers] = useState([1]);
  const keyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const toggleIsCalling = () => {
    setIsCalling((isCalling) => !isCalling);
  };

  const markNumber = (number) => {
    setMarkedNumbers([...markedNumbers, number]);
  };

  return (
    <PhoneContext.Provider
      value={{
        isCalling,
        markedNumbers,
        toggleIsCalling,
        markNumber,
        keyNumbers,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};
export default PhoneContextProvider;
