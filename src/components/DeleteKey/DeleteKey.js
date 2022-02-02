import { useContext } from "react/cjs/react.development";
import PhoneContext from "../Context/PhoneContext";

const DeleteKey = ({ value, className }) => {
  const { deleteNumbers } = useContext(PhoneContext);

  const mark = (event) => {
    event.stopPropagation();
    deleteNumbers();
  };
  return (
    <li>
      <button className={className} onClick={mark}>
        {value}
      </button>
    </li>
  );
};
export default DeleteKey;
