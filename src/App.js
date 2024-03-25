import logo from "./logo.svg"
import { Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/travelogs/:id" element={<div />}></Route>
          <Route path="/mytravelogs" element={<div />}></Route>
          <Route path="/mytravelogs/:id" element={<div />}></Route>
          <Route path="/publish" element={<div />}></Route>
          <Route path="/login" element={<div />}></Route>
          <Route path="/register" element={<div />}></Route>
        </Routes>
      </div>
      <div className="footer" />
    </BrowserRouter>
  )
}

export default App
