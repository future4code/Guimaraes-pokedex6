export const goToPokedex =(navigate) => {
    navigate('/Pokedex')

}

export const goToDetailsPage =(navigate,name) =>{
    navigate (`/DetalhesPokemon/${name}`)
}

export const goToHomePage =(navigate)=>{
    navigate('/')
}

