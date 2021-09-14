import axios from 'axios'
export const ifStart = 'ifStart'
export const ifSuccess = 'ifSuccess'
export const ifFail = 'ifFail'


const fetchPoke = () => dispatch => {

  dispatch({ type: ifStart })

 
  axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => dispatch({
      payload: response.data,
      type: ifSuccess
    }))
    .catch(error => dispatch({
      payload: error.message,
      type: ifFail
    }))
}

export default fetchPoke