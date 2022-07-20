import './_ex.css'

export default function Home() {
    return <>
        <div className="content-container">
            <div className="content-text">
                <h1> Agora a terapia ficou na ponta de seus <span>dedos</span></h1>
                <p>hahaha foi mal galera nn faço ideia doq bota aqui que deus abençoe vcs</p>
                <button href="*" type="button" className="main-button">
                    <a href="*"> clica aqui</a></button>
            </div>
            <div className="imagem-prinp">
                <img src={require("../assests/firstimg.svg").default} alt="alt" />
            </div>
        </div>
        <div className="container-about">
            <div className="about">
                <div className="text-about">
                    <h2>nao sei oq bota aquui</h2>
                    <p>nos tentamos fazer o site da psicologia viva soq melhor mas como a gente nn sabe programar saiu isso</p>
                </div>
            </div>
        </div>
    </>
}