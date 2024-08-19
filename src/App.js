import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyWebPage from "./pages/MyWebPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyWebPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
