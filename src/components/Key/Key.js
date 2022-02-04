import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";

const Key = ({ value, className }) => {
  const { markNumber } = useContext(PhoneContext);

  const mark = (event) => {
    event.stopPropagation();
    markNumber(value);
  };
  return (
    <li>
      <button className={className} onClick={mark}>
        {value}
      </button>
    </li>
  );
};
export default Key;
