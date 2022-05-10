import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/urls'


const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([]) 
    const [pokemons, setPokemons] = useState([]) 
    const [pokedex, setPokedex] = useState([]) 

    
    useEffect(() => {
      getPokemonNames()
    }, [])

    //console.log(pokemonNames)
   
    const getPokemonNames = () => {

      axios
      .get(`${ BASE_URL }`)
      
      .then((response) => {
        setPokemonNames(response.data.results)
       // console.log (setPokemonNames)
      } )
      .catch((error) => {
        alert(error.message)
      })
    }



     
    useEffect(() => {
      const newList = [] 

      pokemonNames.forEach((item) => {

        
      // console.log(item.url)
        axios
        .get(item.url)
        

        .then((response) => {

         

          newList.push(response.data) 

          if(newList.length === 20){  

             const orderedList = newList.sort((a, b) => { 

                return a.id - b.id 
            })
             setPokemons(orderedList) 

             //console.log(pokemons)
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