import './about.css'

function About(props) {
    return (
        <div>
            <span className="anchor" id="about"></span>
            <h2 className="about-title">Sobre</h2>

            <div className="about">
                <div className="description">
                    <div className="my-photo">
                        <img src="./foto-linkedin.jpg" alt="Rodolfo Santana" />

                    </div>
                    <div className="text">
                        Olá, me chamo Rodolfo Santana, sou um desenvolvedor web full stack. Tenho 35 anos e sou de São Paulo - SP.
                    </div>

                    <div className="text">
                        Tenho formação em desenvolvimento web pela Digital House. E antes de iniciar minha transição de carreira, atuava como empresário organizando eventos e cursos.

                        Me orgulho de realizar um evento presencial para mais de 3 mil pessoas com participação de Chris Gardner, de ter escalado o Monte Fuji e das pessoas incríveis que conheci e tenho o prazer de conviver.
                        <div>
                        <h3 className="about-title">Tecnologias</h3>
                        <ul className="tecno-list">
                            {props.tecnoList.map((item)=>{return (<li key={item}>{item}</li>)})}
                        </ul>           
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;