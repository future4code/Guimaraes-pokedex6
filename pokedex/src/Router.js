import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import Pokedex from './pages/PokedexPage';


const Router = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path = "/Pokedex" element={<Pokedex/>}/>
            <Route path = "/DetalhesPokemon" element={<DetailsPage/> }/>
        </Routes>
    </BrowserRouter>
        
    )
}

export default Router


//</BrowserRouter>
//<Routes>
  //          <Route exact path="/" render={(props) => <HomePage{...props}/>}/>
    //        <Route exact path="/pokedex" render={(props) => <PokedexPage{...props}/>}/>
      //      <Route path = "/DetalhesPokemon" render={(props) => <DetailsPage{...props}/>}/>
        //</Routes>
    //</BrowserRouter>