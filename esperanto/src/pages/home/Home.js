import './_Home.css'

export default function Home() {
    return <>
        <div className="content-container">
            <div className="content-text">
                <h1> Agora a terapia ficou na ponta de seus <span>dedos</span></h1>
                <p>Realize seu cadastro e tenha consultas online com os nossos especialistas</p>
                <button href="*" type="button" className="main-button">
                    <a href="*">Cadastre-se</a></button>
            </div>
            <div className="imagem-prinp">
                <img src={require("../../assests/firstimg.svg").default} alt="alt" />
            </div>
        </div>
        <div className="informations">
            <div className="container-about">
                <div className="about">
                    <div className="text-about">
                        <h2>Quem somos?</h2>
                        <p>Somos um grupo de desenvolvedores com o objetivo de tornar a terapia online mais acessivel a todos</p>
                    </div>
                </div>
            </div>
            <div className="service-container">
                <div className="row">
                    <div className="card">
                        <div className="icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h3>Objetivos</h3>
                        <p>Buscar a melhor forma de comunicação para os nossos usuários e aos profissionais da área da saúde</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h3>Público Alvo</h3>
                        <p>Usuários que estejam necessitando de ajuda terapeutica e profissionais em busca de uma plataforma simples de consultas</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h3>Plataforma</h3>
                        <p>Nossos usuários teram acessos a materiais gratuitos disponibilizados por profissionais e a possibilizade de marcar consultas por preços acessíveis</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h3>Diferencial</h3>
                        <p>Contato direto com profissional, sem a necessidade de sair de casa, dando conforto ao usuário e reduzindo gastos do terapeuta</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="plans-container">
            <div className="parent">
                <div className="container-price">
                    <div className="wrapper">
                        <input type="radio" name="slider" id="tab-1" />
                        <input type="radio" name="slider" id="tab-2" defaultChecked />
                        <input type="radio" name="slider" id="tab-3" />
                        <div className="cabeca">
                            <label htmlFor="tab-1" className="tab-1">Basico</label>
                            <label htmlFor="tab-2" className="tab-2">Promocional</label>
                            <label htmlFor="tab-3" className="tab-3">anual</label>
                            <div className="slider"></div>
                        </div>
                        <div className="cards-area">
                            <div className="cartao">
                                <div className="row-price row-1">
                                    <div className="pricing-details">
                                        <span>R$190</span>
                                        <p>para os q sao da area</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                                <div className="row-price">
                                    <div className="pricing-details">
                                        <span>R$7.90</span>
                                        <p>para os nao sao da area</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                                <div className="row-price">
                                    <div className="pricing-details">
                                        <span>R$450</span>
                                        <p>para os q sao da area</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="button" name="button">açina ai</button>
                    </div>
                    <div className="wrapper">
                        <input type="radio" name="slider" id="tab-4" />
                        <input type="radio" name="slider" id="tab-5" defaultChecked />
                        <input type="radio" name="slider" id="tab-6" />
                        <div className="cabeca">
                            <label htmlFor="tab-4" className="tab-4">Basico</label>
                            <label htmlFor="tab-5" className="tab-5">Promocional</label>
                            <label htmlFor="tab-6" className="tab-6">anual</label>
                            <div className="slider"></div>
                        </div>
                        <div className="cards-area">
                            <div className="cartao">
                                <div className="row-price row-1">
                                    <div className="pricing-details">
                                        <span>R$190</span>
                                        <p>para os q sao da area</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                                <div className="row-price">
                                    <div className="pricing-details">
                                        <span>R$80</span>
                                        <p>psei naaiia</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                                <div className="row-price">
                                    <div className="pricing-details">
                                        <span>R$60</span>
                                        <p>psei naaiia</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="button" name="button">açina ai</button>
                    </div>
                    <div className="wrapper">
                        <input type="radio" name="slider" id="tab-7" />
                        <input type="radio" name="slider" id="tab-8" defaultChecked />
                        <input type="radio" name="slider" id="tab-9" />
                        <div className="cabeca">
                            <label htmlFor="tab-7" className="tab-7">Basico</label>
                            <label htmlFor="tab-8" className="tab-8">Promocional</label>
                            <label htmlFor="tab-9" className="tab-9">anual</label>
                            <div className="slider"></div>
                        </div>
                        <div className="cards-area">
                            <div className="cartao">
                                <div className="row-price row-1">
                                    <div className="pricing-details">
                                        <span>R$120</span>
                                        <p>para os q sao gey</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                                <div className="row-price">
                                    <div className="pricing-details">
                                        <span>R$1870</span>
                                        <p>para os romanticos</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                                <div className="row-price">
                                    <div className="pricing-details">
                                        <span>R$520</span>
                                        <p>para os makonheros</p>
                                    </div>
                                    <ul className="features">
                                        <li><i className="fa-solid fa-check"></i><span>nn sei</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>benefiooo</span></li>
                                        <li><i className="fa-solid fa-check"></i><span>que ideia terrivel me botar p fazer isso</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="button" name="button">açina ai</button>
                    </div>

                </div>
            </div>
        </div>
    </>
}