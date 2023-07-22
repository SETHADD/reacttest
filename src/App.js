import "./reset.css";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Data from "./data.json";
import Modals from "./components/modals/modals";
import { useState } from "react";

function App() {
  const [HighLight, setHighlight] = useState({});
  const [Close, setClose] = useState(false);

  function hide() {
    setClose(!Close);
    setHighlight({});
  }

  function render(beast) {
    setClose(!Close);
    setHighlight(beast);
  }

  return (
    <div className="App">
      <Header />
      <Main data={Data} render={render} />
      {Close && <Modals hide={hide} HighLight={HighLight} />}
      <Footer />
    </div>
  );
}

export default App;

// HighLight = {HighLight}
