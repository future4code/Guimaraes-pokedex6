import React from 'react'
import { HeaderContainer, TitleHeader } from './styled'
import { RightHeaderButton, LeftHeaderButton  } from '../../constants/buttons'
import { goToPokedex } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'



const Header = ({title, leftButtonFunction, showRightButton}) => { 
    
   const navigate = useNavigate()

    
    const leftButtonTitle = () => {
      switch (title) {
          case 'Lista de Pokémons':
            return 'Ir para Pokedex' 
          case 'Pokédex':
              return 'Voltar para a lista de pokemons'
          default: 
              return 'Voltar'
       }
    }


    return (
        <HeaderContainer>
            <LeftHeaderButton onClick={leftButtonFunction}>
          
               {leftButtonTitle()} 

            </LeftHeaderButton >
            
            <TitleHeader>{title}</TitleHeader>
          
            {showRightButton &&
              <RightHeaderButton onClick={() => goToPokedex(navigate)}>
                Ir para Pokédex
              </RightHeaderButton>
            }
        </HeaderContainer>
     )
}
export default Header