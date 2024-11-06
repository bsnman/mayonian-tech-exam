import "./App.scss";
import Header from "./components/Header/Header";
import Home from "src/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
