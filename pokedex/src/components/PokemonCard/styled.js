import styled from 'styled-components'
import { mainPink } from '../../constants/colors'


export const PokemonCardContainer = styled.div`
  margin: 4%;
`

export const CardConteiner = styled.div`
  background-color: ${mainPink};
  border: 1px solid rgb(182, 180, 178);
  border-radius: 10px;
  width: 15vw;
  height: 40vh;
  text-align: center;
  /* primeira letra minuscula */
  /* text-transform: capitalize; */
  /* letras maiusculas */
  text-transform: uppercase; 
  color: rgb(77, 75, 73);
  padding: 5%;
  margin: 10px;
  &:hover{
  transform: scale(1.1);
  background-color: rgb(247, 229, 210);
  }
`

export const ImgPokemon = styled.img`
   width: 110px;
   margin: 20% 5% 10%;
   `