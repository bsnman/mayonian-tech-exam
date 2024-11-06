import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import router from "src/router";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
