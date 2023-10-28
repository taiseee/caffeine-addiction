import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* ダークモードはclassNameのlightをdarkに */}
      <Nav />
      <main className="light text-foreground bg-background">
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
