import { connect } from 'react-redux'
import { fetchPoke, onePoke, pokeForms } from '../actions';
import { useEffect, useState } from 'react';
import  './componentsStyle.css'


const mapStatetoProps = (state) => {
    return {
        poke: state.pokeReducer.pokeData,
        userInput: state.pokeReducer.userInput,

    }
}



const Form = (props)=> {
    const [userInput, setInput] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {

        if (searchQuery !== '') {
            props.onePoke(searchQuery)
        } else {
            props.fetchPoke()
        }


    }, [searchQuery])

    return (
      <div id="Form">
          <form>
              <h1 >Add A New Pokemon to The List</h1>
              <input type="text" placeholder="Pokemon Name">
                
              </input>

              <input type="text" placeholder="Pokemon Type">

              </input>
              <button type="submit">
                  Submit
              </button>
          </form>
      </div>
    );
  }
  
  export default connect(mapStatetoProps, { fetchPoke, onePoke })(Form)