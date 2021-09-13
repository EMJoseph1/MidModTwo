import axios from 'axios'
export const ifStart = 'ifStart'
export const ifSuccess = 'ifSuccess'
export const ifFail = 'ifFail'


// this is just syntax for dispatch
const fetchPoke = () => dispatch => {

  dispatch({ type: ifStart })

  // ajax call
  // you can only use await inside async functions
  // axios syntax with http request
  // in axios you no longer have to use json() to make the response readable becase does that for us under the hood - thank you axios

  // await is replacing .then() aka our thenables
  axios.get('https://pokeapi.co/api/v2/pokemon/1')
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