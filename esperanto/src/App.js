import './App.css';
import Navbar from './components/Navbar'
import Pricing from './pages/Pricing'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </>


  );
}

export default App;
