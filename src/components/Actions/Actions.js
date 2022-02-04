import { useContext } from "react";
import Action from "../Action/Action";
import PhoneContext from "../Context/PhoneContext";
import Display from "../Display/Display";

const Actions = () => {
  const { markedNumbers, isCalling } = useContext(PhoneContext);
  return (
    <div className="actions">
      <Display />
      {isCalling ? (
        <Action className="hang active" value={"Hang"} />
      ) : (
        <Action
          className={`call ${markedNumbers.length === 9 ? "active" : ""}`}
          value={"Call"}
        />
      )}
    </div>
  );
};
export default Actions;
