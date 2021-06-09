import './header.css';

function Header () {
    return (
        <header>
        <nav>
          <h2><a href="/">Rodolfo</a></h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a className="anchor" href="#portfolio">Portfólio</a></li>
            <li><a href="#about">Sobre</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;