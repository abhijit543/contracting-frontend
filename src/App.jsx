import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/pages/home/Home";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
