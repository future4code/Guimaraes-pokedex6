import React, { useContext } from 'react'
import { PokemonCardContainer, CardConteiner, ImgPokemon } from './styled'
import { ButtonAdd, ButtonDetails } from '../../constants/buttons'
import { goToDetailsPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../global/GlobalStateContext'




const PokemonCard = ({pokemon, isPokedex}) => { 

    const navigate = useNavigate()                
    
    
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)
    

    
    const addToPokedex = () => {
       
      const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
      
      const newPokemonsList = [...pokemons]
      
      newPokemonsList.splice(pokeIndex, 1) 

      const orderedPokemons = newPokemonsList.sort((a, b) => {

        return  a.id - b.id 

      })
      
      const newPokedexList = [...pokedex, pokemon] 
      
      const orderedPokedex = newPokedexList.sort((a, b) => {
         return a.id - b.id 
      })
        
        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)
    }

    
    const removeFromPokedex = () => {
        
      const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
      
      const newPokedexList = [...pokedex]
     
      newPokedexList.splice(pokeIndex, 1) 

      
      const orderedPokedex = newPokedexList.sort((a, b) => {

         return a.id - b.id 
       })
      
      const newPokemonsList = [...pokemons, pokemon] 
      
     
      const orderedPokemons = newPokemonsList.sort((a, b) => {

         return a.id - b.id 
      })
        
        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)

    }

     return (
        <PokemonCardContainer>
            <CardConteiner>
                
                <ImgPokemon src={pokemon && pokemon.sprites.front_default} alt={pokemon.name}/>
                
                <ButtonAdd onClick={isPokedex ? removeFromPokedex : addToPokedex}>
                
                  {isPokedex ? 'Remover a Pokédex' : 'Adicionar a Pokédex'}
                </ButtonAdd >
                <ButtonDetails onClick={() => goToDetailsPage(navigate, pokemon.name)}>Ver detalhes</ButtonDetails>
                
            </CardConteiner>

        </PokemonCardContainer>
    )
}
export default PokemonCard