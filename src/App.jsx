import { Routes, Route } from "react-router-dom";
import FloristPortfolio from "./components/FloristPortfolio";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<FloristPortfolio />} />
      </Routes>
    </main>
  );
}

export default App;