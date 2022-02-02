import { useContext } from "react/cjs/react.development";
import PhoneContext from "../Context/PhoneContext";
import Display from "../Display/Display";

const Actions = () => {
  const { markedNumbers } = useContext(PhoneContext);
  return (
    <div className="actions">
      <Display />
      El botón de llamar debe tener la clase "activo" cuando el número de
      teléfono tiene 9 cifras
      <a
        href="#"
        className={`call ${markedNumbers.length === 9 ? "active" : ""}`}
      >
        Call
      </a>
      Sólo se tiene que ver un botón u otro
      <a href="#" className="hang active">
        Hang
      </a>
    </div>
  );
};
export default Actions;
