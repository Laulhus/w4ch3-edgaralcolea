import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";
import DeleteKey from "../DeleteKey/DeleteKey";
import Key from "../Key/Key";

const Keyboard = () => {
  const { keyNumbers } = useContext(PhoneContext);
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyNumbers.map((number) => (
          <Key key={number} value={number} className={"key"}></Key>
        ))}
        <DeleteKey
          key={"delete"}
          className="key big"
          value={"delete"}
        ></DeleteKey>
      </ol>
    </div>
  );
};
export default Keyboard;
