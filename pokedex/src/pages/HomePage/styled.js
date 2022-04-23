import styled from 'styled-components'
import { mainAntiquewhite } from '../../constants/colors'



export const PokedexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  /* primeira letra minuscula */
  /* text-transform: capitalize; */
  /* letras maiusculas */
  text-transform: uppercase; 
  color: rgb(77, 75, 73);
  margin: 5%;
`