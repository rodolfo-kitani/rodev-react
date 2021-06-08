import './about.css'

function About(props) {
    return (
        <div>
            <h2 className="about-title">Sobre</h2>
            <div className="about">
                <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat iusto velit, quo perspiciatis, quam consectetur aut sunt eligendi cupiditate adipisci aspernatur? Veritatis laboriosam sit, laborum beatae sint tenetur soluta!
                </div>
                <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat iusto velit, quo perspiciatis, quam consectetur aut sunt eligendi cupiditate adipisci aspernatur? Veritatis laboriosam sit, laborum beatae sint tenetur soluta!
                </div>
                <div className="my-photo">
                    <img src="https://www.rodev.com.br/src/foto-linkedin.jpg" alt="Rodolfo Santana" />
                </div>
            </div>
            <div>
                <h3 className="about-title">Tecnologias</h3>
                <ul className="tecno-list">
                    {props.tecnoList.map((item)=>{return (<li key={item}>{item}</li>)})}
                </ul>           
            </div>
        </div>
    );
}

export default About;