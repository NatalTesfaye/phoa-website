import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import News from "./routes/News";
import MemberShip from "./routes/MemberShip";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboute" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/memberShift" element={<MemberShip />} />
      </Routes>
    </div>
  );
}
