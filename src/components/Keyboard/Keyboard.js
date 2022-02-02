import { useContext } from "react/cjs/react.development";
import PhoneContext from "../Context/PhoneContext";
import Key from "../Key/Key";

const Keyboard = () => {
  const { keyNumbers, markNumber, setMarkedNumbers } = useContext(PhoneContext);
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyNumbers.map((number) => (
          <Key key={number} value={number} className={"key"}></Key>
        ))}
        <Key key={"delete"} className="key big" value={"delete"}></Key>
      </ol>
    </div>
  );
};
export default Keyboard;
