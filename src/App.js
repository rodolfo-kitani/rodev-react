// import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import './banner-img.jpg';

import Header from './components/Header';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';

import tecnoList from './services/filter';
import workList from './services/workList';

function App() {
  const [search, setSearch] = useState("");
  const [works, setWorks] = useState(workList);

  // function filter() {
  //   console.log(workList.tech)
  //   const listFilter = workList.filter(function (work) {
  //     return work.tech.toLowerCase().indexOf(search.toLowerCase()) >= 0;
  //   })
  //   setWorks(listFilter);
  // }

  function filter() {
    const listFilter = workList.filter((work)=>{
      return work.tech.indexOf(search) >= 0;
    })
    // console.log();
    setWorks(listFilter);
    // console.log(search)
  }

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
        <input
        type="text"
        placeholder="Filtro por tecnologia"
        input={search}
        onChange={(event)=>{
          setSearch(event.target.value);
          }}
        // onSubmit={filter()}
        // onKeyUp={(event)=>{(event.key === "Enter") ? console.log("FOI") : null}}
        />
          <button className="btn" onClick={filter}>
            Pesquisar
          </button>
      </div>
      <div className='filter'>
        { tecnoList.map( function(item) {
          return (
            <button key={item}>{item}</button>
          )
        })
        }
      </div>
      <div className='cards-tab'>
        { works.map(function(item) {
          return <Card key={item.id} workList={item}/>

        }) }
      </div>
      <About tecnoList={tecnoList} />
      <Footer/>
    </>
  );
}

export default App;
