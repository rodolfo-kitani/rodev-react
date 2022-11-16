import { useEffect, useState } from 'react';
import './App.css';

import './banner-img.jpg';

import Header from './components/Header';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';
import FilterButton from './components/FilterButton';

import tecnoList from './services/filter';
import axios from "axios";

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

function App() {
  const [search, setSearch] = useState('');
  const [works, setWorks] = useState([])
  const [filterWords, setFilterWorks] = useState([]);

  async function getWorkList() {
    axios.get(BACKEND_API_URL)
      .then((response) => {
        setWorks(response.data);
        setFilterWorks(response.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getWorkList();

  }, []);

  function showMoreWorks() {
    setFilterWorks(works)
  }

  function lookup(item){
    return item.tech.toString().toLowerCase().indexOf(search.toLowerCase()) >= 0;
  }

  function filterItem() {
    const listFilter = works.filter( lookup )
    if(search) {
      return setFilterWorks(listFilter)
    } else {
      setFilterWorks(works)
    }
  }

  function filterBtn(search) {
    const listFilter = works.filter((work)=>{
      return work.tech.toString().toLowerCase().indexOf(search.toLowerCase()) >= 0;
    })
    if(search) {
      return setFilterWorks(listFilter)
    } else {
      setFilterWorks(works)
    }
  }

  return (
    <>
      <Header />
      <span className='anchor' id='home'></span>
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
        <span className='anchor' id="portfolio"></span>
        <h2>Portfólio</h2>
      </div>
      <div className='filter'>
        <input
        id="filter-box"
        type="text"
        placeholder="Filtro por tecnologia"
        input={search}
        onChange={(event)=>{
          setSearch(event.target.value);
          }}
        onKeyPress={(event)=>{
          if(event.key === "Enter"){return filterItem()}
        }}
        />
          <button className="btn" onClick={filterItem}>
            Pesquisar
          </button>
      </div>
      <div className='filter' >
        { tecnoList.map( function(item){
          return <FilterButton key={item} onChange={filterBtn}>{item}</FilterButton>
        })}
      </div>
      <div className='cards-tab'>
        { Array.isArray(filterWords) ?
          filterWords.map((work) => {
              return <Card key={work.order} workList={work} />
            })
          : <p>Carregando...</p>
        }
      </div>
      
      { works.length >=6 ? (
          <div className='load-more-works'>
            <button className='load-more-works-button' onClick={() => showMoreWorks()}>Mostrar mais</button>
          </div>
        )
        : null
      }}
      
      <About tecnoList={tecnoList}/>

      <Footer/>
    </>
  );
}

export default App;
