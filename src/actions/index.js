import axios from 'axios'
export const ifStart = 'ifStart'
export const ifSuccess = 'ifSuccess'
export const ifFail = 'ifFail'


export const fetchPoke = () => dispatch => {

  dispatch({ type: ifStart })

  axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => dispatch({
      payload: response.data.results,
      type: ifSuccess
    }))
    .catch(error => dispatch({
      payload: error.message,
      type: ifFail
    }))
}
//the code above is grabbing the data from the api

export const onePoke = (pokemonName)=> dispatch =>{
  dispatch({ type: ifStart })
  
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => dispatch({
   payload: response.data.results,
   type: ifSuccess
   }))
  .catch(error => dispatch({
    payload: error.message,
    type: ifFail
  }))
}


export const pokeForms = (pokemonName)=> dispatch =>{
  dispatch({ type: ifStart })
  
  axios.get(`"https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`)
  .then(response => dispatch({
   payload: response.data.forms,
   type: ifSuccess
   }))
  .catch(error => dispatch({
    payload: error.message,
    type: ifFail
  }))
}
//the code above is grabbing the one pokemon data from the api, depenedant on the name of the pokemon at the end of the api link


// export default fetchPoke
// export default onePoke