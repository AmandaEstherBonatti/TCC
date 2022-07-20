import './_Navbar.css'

export default function Navbar() {
    return <nav className="imagem">
    <img src="img/novobg.png" alt=""/>
    <div className="hero">
      <div className="navbar">
        <div className="logo">
          <h1><i className="fa-brands fa-pagelines"></i><span>Espe</span>ranto</h1>
        </div>
        <ul className="barra">
          <li className="barra-item"><a href="*" className="ancor">Plano de Saude</a></li>
          <li className="barra-item"><a href="*" className="ancor">Nossos especialistas</a></li>
          <li className="barra-item"><a href="*" className="ancor">sobre nos</a></li>
          <button className="btn-barra" type="button">
            <li className="barra-button"><a href="login.html" className="ancor ancor-btn">entrar</a></li>
          </button>
        </ul>
      </div>
    </div>
    </nav>
}