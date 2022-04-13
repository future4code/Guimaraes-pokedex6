import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import Pokedex from './pages/Pokedex';


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