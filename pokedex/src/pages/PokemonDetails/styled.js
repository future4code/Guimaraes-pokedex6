import styled from 'styled-components'
import { mainPink } from '../../constants/colors'



// styled PokemonDetailsScreen
export const PokemonInfosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5%;
`

export const DetailsConteiner = styled.div`
  display: flex; 
`

export const StatsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${mainPink}; 
  border: 1px solid rgb(182, 180, 178);
  border-radius: 10px;
  width: 30vw;
  height: 66vh;
  text-align: center;
  color: rgb(77, 75, 73);
  margin-left: 15%;
  margin-right: 20%;
`

export const TitleContainer = styled.h2`
   align-self: center;
`

export const ImagesConteiner = styled.div`
  height: 75%;
  display: grid;
`


export const ImgWrapper = styled.img`
   background-color: ${mainPink};
   border: 1px solid rgb(182, 180, 178);
   border-radius: 10px; 
   width: 200px;
   margin-left: 30%;
   margin-bottom: 11%;
`

export const TypeAndMovesContainer = styled.div`
  display: grid;
  height: 75%;
  width: 300px;
`

export const TypesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${mainPink}; 
  border: 1px solid rgb(182, 180, 178);
  border-radius: 6px;
  width: 30vw;
  height: 12vh;
  text-align: center;
  color: rgb(77, 75, 73);
`

export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${mainPink}; 
  border: 1px solid rgb(182, 180, 178);
  border-radius: 10px;
  width: 30vw;
  height: 50vh;
  text-align: center;
  color: rgb(77, 75, 73);
  margin-top: 30px;
`
