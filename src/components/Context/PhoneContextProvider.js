import { useState } from "react";
import PhoneContext from "./PhoneContext";

const PhoneContextProvider = ({ children }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [markedNumbers, setMarkedNumbers] = useState([]);
  const keyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const toggleIsCalling = () => {
    setIsCalling((isCalling) => !isCalling);
  };

  const markNumber = (number) => {
    if (markedNumbers.length <= 8) setMarkedNumbers([...markedNumbers, number]);
    else {
      return;
    }
  };

  const deleteNumbers = () => {
    setMarkedNumbers([]);
  };
  return (
    <PhoneContext.Provider
      value={{
        isCalling,
        markedNumbers,
        toggleIsCalling,
        markNumber,
        keyNumbers,
        deleteNumbers,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};
export default PhoneContextProvider;
