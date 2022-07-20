import './_Home.css'

export default function Home() {
  return <div>
    <div className="popup">
      <div className="close-pop">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </div>
      <div className="popup-box">
        <h3>deseja cadastrar-se?</h3>
        <p>temos duas formas de cadastro</p>
        <button type="button" className="button-pop"><a href="*">cliente</a></button>
        <button type="button" className="button-pop especial "><a href="*">especialista</a></button>
      </div>
    </div>
  </div>
}