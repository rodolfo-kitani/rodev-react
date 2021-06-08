import './footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer(){
    return(
        <footer>
            <div>Desenvolvido por Rodolfo Santana</div>
            <div className='links'>
                <ul>
                    <li><a href="https://github.com/rdmoedas" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/rodolfo-santana-57766b47/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;