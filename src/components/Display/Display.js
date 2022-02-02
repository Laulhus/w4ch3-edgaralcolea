import { useContext } from "react/cjs/react.development";
import PhoneContext from "../Context/PhoneContext";

const Display = () => {
  const { markedNumbers } = useContext(PhoneContext);
  return <span className="number">{markedNumbers}</span>;
};
export default Display;
