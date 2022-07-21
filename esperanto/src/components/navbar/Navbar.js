import './_Navbar.css'
import { FaSeedling } from "react-icons/fa";

export default function Navbar() {
  return <nav className="hero">
    <div className="navbar">
      <h1 className="logo"><FaSeedling /> <span>Espe</span>ranto</h1>
      <ul className="barra">
        <li className="barra-item"><a href="/" className="ancor">Plano de Saude</a></li>
        <li className="barra-item"><a href="/" className="ancor">Nossos especialistas</a></li>
        <li className="barra-item"><a href="/" className="ancor">sobre nos</a></li>
        <li className="barra-item"><a href="/" className="ancor">cadastrar</a></li>
        <button className="btn-barra" type="button">
          <li className="barra-button"><a href="*" className="ancor ancor-btn">entrar</a></li>
        </button>
      </ul>
    </div>

  </nav>
} 