import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";

const Info = () => {
  const { isCalling } = useContext(PhoneContext);
  return (
    <span className={`message ${isCalling ? "" : "off"}`}>Calling...</span>
  );
};
export default Info;
