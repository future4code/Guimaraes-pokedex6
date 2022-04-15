import React from 'react'
//import { HeaderContainer } from "./styled";

const PokedexPage = (props) => {
  const {match} = props;
  const {params} = match;
  const {pokemonId} = params;
  return (
    <div> {`${pokemonId}`}</div>
    
  )
}

export default PokedexPage