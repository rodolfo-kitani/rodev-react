import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import bannerImg from './banner-img.jpg';

function App() {
  return (
    <>
      <Header />
      <div className='banner'>
        <h1>Rodolfo Santana</h1>
        <h2>Full Stack Developer</h2>
        <div className='intro-text'>
          Olá sou um Desenvolvedor Web Full Stack Jr.
        </div>
        <div className='intro-text'>
          tenho grande interesse em programação, tecnologia e mercado financeiro.
        </div>
      </div>
      <div className='section-title'>
        <h2>Portfolio</h2>
      </div>
      <div className='filter'>
        <input type="text" name="filter" id="filter"/>
      </div>
      <div className='filter'>
          <button>Node</button>
          <button>Node</button>
          <button>Node</button>
          <button>Node</button>
          <button>Node</button>
          <button>Node</button>
      </div>
      <div className='cards-tab'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
      <footer>
        <div>Desenvolvido por Rodolfo Santana</div>
        <div className='links'>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Git</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Youtube</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
