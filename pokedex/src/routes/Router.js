import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from '../pages/PokemonDetails/DetailsPage';
import HomePage from '../pages/HomePage/Home';

import Pokedex from '../pages/Pokedex/Pokedex';


const Router = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path = "/Pokedex" element={<Pokedex/>}/>
            <Route path = "/DetalhesPokemon/:name" element={<DetailsPage/> }/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router