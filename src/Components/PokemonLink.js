import { connect } from 'react-redux'
import { fetchPoke, pokeForms } from '../actions';
import { useEffect, useState } from 'react';


const mapStatetoProps = (state) => {
    return {
        poke: state.pokeReducer.pokeData,
        searchQuery: state.pokeReducer.searchQuery
    }

}



const PokemonLink = (props) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [userInput, setInput] = useState('')


    useEffect(() => {

        if (searchQuery !== '') {
            props.pokeForms(searchQuery)
        } else {
            props.fetchPoke()
        }


    }, [searchQuery])

    const handleClick = (userInput) => {
        setSearchQuery(userInput)
        setInput('')
    }





    return (
        <div id="PokemonLink">
          <button onClick={handleClick}>Something here</button>
            
           {/* <button onClick={()=>pokeForms(searchQuery)}> Help</button> */}
           <h1>Help</h1>
            
        </div>
    )
}
export default connect(mapStatetoProps, { fetchPoke, pokeForms })(PokemonLink)

