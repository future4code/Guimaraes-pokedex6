import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { URL } from '../constants/urls'


const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([]) 
    const [pokemons, setPokemons] = useState([]) 
    const [pokedex, setPokedex] = useState([]) 

    
    useEffect(() => {
      getPokemonNames()
    }, [])
   
    const getPokemonNames = () => {
      axios
      .get(`${URL}`)
      
      .then((response) => {
        setPokemonNames(response.data.results)
        
      } )
      .catch((error) => {
        alert(error.message)
      })
    }



     
    useEffect(() => {
      const newList = [] 

      pokemonNames.forEach((item) => {
     
        axios
        .get(item.url)

        .then((response) => {

          newList.push(response.data) 

          if(newList.length === 20){  

             const orderedList = newList.sort((a, b) => { 

                return a.id - b.id 
            })
             setPokemons(orderedList) 
          }
        })
        .catch((error) => {
          alert(error.message)
        })
      })
    }, [pokemonNames])


    
    
    const data = { pokemons, setPokemons, pokedex, setPokedex }


    return (
      
        <GlobalStateContext.Provider value={data}> 
         
          {props.children}

        </GlobalStateContext.Provider>
     )
}
export default GlobalState