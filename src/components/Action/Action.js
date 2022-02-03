import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";

const Action = ({ className, value }) => {
  const { toggleIsCalling } = useContext(PhoneContext);
  return (
    <a href="a" className={className} onClick={toggleIsCalling}>
      {value}
    </a>
  );
};
export default Action;
