import "./index.css";
import { Route, Routes } from "react-router-dom";
import SingleMovie from "./components/SingleMovie";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
