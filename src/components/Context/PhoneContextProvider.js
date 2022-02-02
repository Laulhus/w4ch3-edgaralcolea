import { useState } from "react";
import PhoneContext from "./PhoneContext";

const PhoneContextProvider = ({ children }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [markedNumbers, setMarkedNumbers] = useState([1, 2, 3]);

  const toggleIsCalling = () => {
    setIsCalling((isCalling) => !isCalling);
  };

  const markNumber = (number) => {
    setMarkedNumbers(markedNumbers.push(number));
  };

  return (
    <PhoneContext.Provider
      value={{ isCalling, markedNumbers, toggleIsCalling, markNumber }}
    >
      {children}
    </PhoneContext.Provider>
  );
};
export default PhoneContextProvider;
