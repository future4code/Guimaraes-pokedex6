import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../global/GlobalStateContext'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { goToPokedex } from '../../routes/coordinator'
import { PokedexContainer } from './styled'
import Header from '../../components/Header/Header'




const HomePage = () => {

    const navigate = useNavigate() 
   
    const { pokedex } = useContext(GlobalStateContext) 
    return (
        <div>
           <Header
              title={'Pokédex'} 
              leftButtonFunction={() => goToPokedex(navigate)} 
            />
                <PokedexContainer>
                
                  {pokedex && pokedex.map((poke) => {
                  
                    return <PokemonCard key={poke.name} isPokedex pokemon={poke}/> 

                  })}
                  
                </PokedexContainer>
        </div>

     )
}
export default HomePage;