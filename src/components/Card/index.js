import './card.css';

function Card(props) {
    return (
        <div className='card-box'>
            {/* <img src="https://www.rodev.com.br/src/thumb-convite.png" alt="" />
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos laudantium aliquam quam tenetur aut architecto sed molestias eos voluptatibus! Quas ut voluptatem quis velit totam harum fugiat mollitia culpa odit.</div>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Heroku</li>
                <li>Git</li>
            </ul> */}
            <a href={props.workList.url} target="_blank" rel="noopener noreferrer">
                <img src={props.workList.img} alt={props.workList.title} />
            </a>
            <div className="card-title">{props.workList.title}</div>
            <div className="card-description">{props.workList.description}</div>
            <ul>
                {props.workList.tech.map(function(item) {
                    return(
                    <li key={item}>{item}</li>
                    );})
                }
            </ul>
        </div>
    )
}

export default Card;