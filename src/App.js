import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
