import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";

const Action = ({ className, value }) => {
  const { toggleIsCalling } = useContext(PhoneContext);

  const pressButton = (event) => {
    event.stopPropagation();
    toggleIsCalling();
  };

  return (
    <a href="#" className={className} onClick={pressButton}>
      {value}
    </a>
  );
};
export default Action;
