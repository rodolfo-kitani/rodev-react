import { useState } from 'react';
import './App.css';

import './banner-img.jpg';

import Header from './components/Header';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';

import FilterButton from './components/FilterButton';

import tecnoList from './services/filter';
import workList from './services/workList';

function App() {
  const [search, setSearch] = useState('');
  const [works, setWorks] = useState(workList);

  function lookup(oi){
    return oi.tech.toString().toLowerCase().indexOf(search.toLowerCase()) >= 0;
  }

  function filter() {
    const listFilter = workList.filter( lookup )
    if(search) {
      return setWorks(listFilter)
    } else {
      setWorks(workList)
    }
  }

  function filterBtn(search) {
    const listFilter = workList.filter((work)=>{
      return work.tech.toString().toLowerCase().indexOf(search.toLowerCase()) >= 0;
    })
    if(search) {
      return setWorks(listFilter)
    } else {
      setWorks(workList)
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
        <h2>Portfolio</h2>
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
          if(event.key === "Enter"){return filter()}
        }}
        />
          <button className="btn" onClick={filter}>
            Pesquisar
          </button>
      </div>
      <div className='filter' >
        {/* { tecnoList.map( function(item) {
          return (
            <button key={item}>{item}</button>
          )
        })
        } */}

        { tecnoList.map( function(item){
          return <FilterButton key={item} onChange={filterBtn}>{item}</FilterButton>
        })}

      </div>
      <div className='cards-tab'>
        { works.map(function(item) {
            return <Card key={item.id} workList={item}/>
        }) }
      </div>
      <About tecnoList={tecnoList}/>
      <Footer/>
    </>
  );
}

export default App;
