import { connect } from 'react-redux'
import fetchPoke from '../actions';
import { useEffect } from 'react';

const mapStatetoProps = (state) =>{
    return{
        poke: state.pokeReducer.pokeURL
    }
}




const PokeSearch = (props)=> {
    useEffect(()=>{
        props.fetchPoke()
    },[])
    
    return (
        <div>
        <h1>Search A Name or Type of Pokemon</h1>
        <div>
           <h3> Name: {props.poke.name} </h3>
           <h3> Type: {props.poke.type} </h3>
        </div>
        </div>
      
    );
  }
  
  export default connect( mapStatetoProps, { fetchPoke })(PokeSearch)