import { useContext } from "react/cjs/react.development";
import PhoneContext from "../Context/PhoneContext";

const Key = ({ value, className, actionOnClick }) => {
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
