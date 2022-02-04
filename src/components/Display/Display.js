import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";

const Display = () => {
  const { markedNumbers } = useContext(PhoneContext);
  return <span className="number">{markedNumbers}</span>;
};
export default Display;
