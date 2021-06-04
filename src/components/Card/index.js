import './card.css';

function Card() {
    return (
        <div className='card-box'>
            <img src="https://www.rodev.com.br/src/thumb-convite.png" alt="" />
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos laudantium aliquam quam tenetur aut architecto sed molestias eos voluptatibus! Quas ut voluptatem quis velit totam harum fugiat mollitia culpa odit.</div>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Heroku</li>
                <li>Git</li>
            </ul>
        </div>
    )
}

export default Card;