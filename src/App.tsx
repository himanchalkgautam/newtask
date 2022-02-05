import { Routes, Route } from "react-router-dom";
import { Desktop1440 } from "./Desktop1440";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Desktop1440 />} />
    </Routes>
  );
}
export default App;
