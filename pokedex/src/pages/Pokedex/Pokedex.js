import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokeListContainer } from './styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'



const Pokedex = () => {
    const { pokemons } = useContext(GlobalStateContext) 
    
    const navigate = useNavigate()
    
    
    return (
        <>
          <Header 
             title={'Lista de Pokémons'} 
             leftButtonFunction={() => goToHomePage(navigate)} 
          />
          <PokeListContainer>
             {pokemons.map((poke) => { 

                return <PokemonCard key={poke.name} pokemon={poke}/> 

             })}
             
          </PokeListContainer>
        </>

    )
}
export default Pokedex;