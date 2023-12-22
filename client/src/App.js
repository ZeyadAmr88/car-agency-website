import "./App.css";
import Header from "./shared/Header";
import Footrt from "./shared/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return(
    <div className = "App">
      <Header />
      <Outlet />
      <Footrt />
    </div>
  );
}

export default App;
