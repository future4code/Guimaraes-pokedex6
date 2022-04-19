import { useNavigate } from "react-router-dom"

export const goToPokedex =(navigate) => {
    navigate('/Pokedex')

}

export const goToDetailsPage =(navigate) =>{
    navigate (`/DetalhesPokemon/`)
}

export const goToHomePage =(navigate)=>{
    navigate('/')
}