import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import { PokemonInfosContainer, ImagesConteiner, ImgWrapper, 
  StatsConteiner, TitleContainer, TypeAndMovesContainer, TypesContainer, 
  MovesContainer, DetailsConteiner  } from './styled'



const DetailsPage = () => {
    
    const [selectedPokemon, setSelectedPokemon] = useState({})
    
    

    const navigate = useNavigate()


    const { name } = useParams() 

    const { pokemons } = useContext(GlobalStateContext) 
    
    
    useEffect(() => {
      
      const currentPokemon = pokemons.find((item) => { return item.name === name})

         setSelectedPokemon(currentPokemon) 
    }, [])




    return (
      <div>
        <Header
              title={name} 
              leftButtonFunction={() => navigate.goBack()} 
              showRightButton 
          />
        <DetailsConteiner>
          <PokemonInfosContainer>
            
              {selectedPokemon && selectedPokemon.sprites &&
                  <ImagesConteiner>
                    <ImgWrapper src={ selectedPokemon.sprites.front_default }/>
                    <ImgWrapper src={ selectedPokemon.sprites.back_default }/>
                  </ImagesConteiner>
              }
              
          
          <TypeAndMovesContainer>
              <TypesContainer>
                
                { selectedPokemon && selectedPokemon.types &&
                
                        selectedPokemon.types.map((type) => {
                          return (
                              <p key={type.type.name}>
                                 <strong>Tipo:</strong>
                                 {type.type.name}
                              </p>
                         )
                      })}
              </TypesContainer>
              <MovesContainer>
                  <TitleContainer>Principais ataques</TitleContainer>
                  
                    { selectedPokemon && selectedPokemon.moves &&
                     
                        selectedPokemon.moves.map((move, index) => { 
                          return (
                              index < 5 && 
                                <p key={move.move.name}>
                                  {move.move.name}
                                </p>
                          )
                      })}
              </MovesContainer>
          </TypeAndMovesContainer>
          <StatsConteiner>
                 <TitleContainer>Poderes</TitleContainer>
                  
                   { selectedPokemon && selectedPokemon.stats &&
                   
                      selectedPokemon.stats.map((stat) => {
                        return (
                            <p key={stat.stat.name}>
                            
                              <strong>{stat.stat.name}:</strong> {stat.base_stat}
                            </p>
                       )
                    })}
              </StatsConteiner>
              </PokemonInfosContainer>
        </DetailsConteiner>
        </div>
     )
}
export default DetailsPage
