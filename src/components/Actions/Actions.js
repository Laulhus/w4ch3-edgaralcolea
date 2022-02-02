import { useContext } from "react/cjs/react.development";
import Action from "../Action/Action";
import PhoneContext from "../Context/PhoneContext";
import Display from "../Display/Display";

const Actions = () => {
  const { markedNumbers } = useContext(PhoneContext);
  return (
    <div className="actions">
      <Display />
      <Action
        className={`call ${markedNumbers.length === 9 ? "active" : ""}`}
        value={"Call"}
      />
      <Action className="hang active" value={"Hang"} />
    </div>
  );
};
export default Actions;
