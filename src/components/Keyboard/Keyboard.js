import { useContext } from "react/cjs/react.development";
import PhoneContext from "../Context/PhoneContext";
import Key from "../Key/Key";

const Keyboard = () => {
  const { keyNumbers } = useContext(PhoneContext);
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyNumbers.map((number) => (
          <Key key={number} value={number}></Key>
        ))}
        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </div>
  );
};
export default Keyboard;
