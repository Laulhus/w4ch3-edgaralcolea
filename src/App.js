import "./App.css";
import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";

import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      El siguiente elemento se oculta añadiéndole la clase "off"
      <Info />
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
}

export default App;
