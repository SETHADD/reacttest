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
  const [HornData, setHornData] = useState(Data );

  function hide() {
    setClose(!Close);
    setHighlight({});
  }

  function render(beast) {
    setClose(!Close);
    setHighlight(beast);
  }

  let handleChoice = (event) => {
    let numSelected = parseInt(event.target.value);
    const select = Data.filter((horn) => horn.horns === numSelected);

    event.target.value === "all" ? setHornData(Data ) : setHornData(select);
  };

  return (
    <div className="App">
      <Header handleChoice ={handleChoice}/>
      <Main render={render} HornData = {HornData} />
      {Close && <Modals hide={hide} HighLight={HighLight} />}
      <Footer />
    </div>
  );
}

export default App;

// HighLight = {HighLight}
