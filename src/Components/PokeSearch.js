import { connect } from 'react-redux'
import { fetchPoke, onePoke, pokeForms } from '../actions';
import { useEffect, useState } from 'react';
import PokemonLink from './PokemonLink'
import { Link } from 'react-router-dom'
import  './componentsStyle.css'



//this is turning our state into props
const mapStatetoProps = (state) => {
    return {
        poke: state.pokeReducer.pokeData,
        userInput: state.pokeReducer.userInput,

    }
}

//this is our actual component that is passing props down
const PokeSearch = (props) => {
    //here we are setting our state for the what the user will input for our onePoke action
    const [userInput, setInput] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    // const dispatch = useDispatch()

    //this is our useEffect that holds a condition that if 
    useEffect(() => {

        if (searchQuery !== '') {
            props.onePoke(searchQuery)
        } else {
            props.fetchPoke()
        }


    }, [searchQuery])





    //a function that is an event listener that will change the setState when a user types something in the input
    const handleChange = (event) => {
        setInput(event.target.value)
    }

    //another function
    const handleClick = (userInput) => {
        setSearchQuery(userInput)
        setInput('')
    }

    //create input form, save user input into state, create an action
    //then pass on userInput coming from props in the useEffect

    return (
        <div id="PokeSearch">

            <h1 id="Form-Title">Search A Name or Type of Pokemon</h1>

            {/* <button onClick={()=>props.fetchPoke("This is what the user typed")}></button> */}

            {/* <form onSubmit={handleChange(
                props.poke.name
            )}> */}
            <form>
            {/* <input type="text" value={userInput} onChange={handleChange}> */}
            <input type="text" value={userInput} onChange={handleChange}>

                {/* I want the data to contantely being fetched while the user is typing. 
            Then the data to be shown once the user is finished typing. 
            Then the user can choose from the results */}

            </input>

            {/* this  */}
            {/* <button onClick={() => handleClick(searchQuery)}> */}
            <button onClick={() => handleClick(searchQuery)}>

                Submit
                {/* User data will need to pop up once submitted */}
            </button>
            </form>

          
{/*                 
                <Link to="/PokemonLink">
                    Helped
                
                </Link>
             */}


            
                {/* {props.poke.map(poke =>  <a href= {poke.url}> {userInput}</a> )} */}


               <p> {props.poke.length > 0 ? props.poke.map(poke => <div> <a href= {poke.url}> {userInput}</a></div> ) : null} </p>

                {/* {props.poke.length > 0 ? props.poke.map(poke =>
                    <div>
                        
                   
                    </div>) : null}
                     */}


                {/* {userInput === props.onePoke(searchQuery) ? props.poke.map(poke => <div> <a href={poke.url}> {userInput} </a> </div>): null} */}

                {/* <a href = {props.poke.map(poke => onePoke(searchQuery))}>Link</a> */}

                {/* {props.poke.length > 0 ? props.poke.map(poke => <div> {poke.name} <a href= {poke.url}> {poke.url} </a>  </div>) : null} */}
           


        </div>

    );
}

export default connect(mapStatetoProps, { fetchPoke, onePoke })(PokeSearch)