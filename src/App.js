
import './reset.css'
import './App.css';
import Header from "../src/components/header/header";
import Main from "../src/components/main/main";
import Footer from '../src/components/footer/footer';
import Data from "./data.json"

function App() {
  return (
    <div className="App">
    <Header />
    <Main data ={Data} />
    <Footer />
    </div>
  );
}

export default App;
