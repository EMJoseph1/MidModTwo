import { connect } from 'react-redux'
import fetchPoke from '../actions';
import { useEffect } from 'react';

const mapStatetoProps = (state) =>{
    return{
        Poke: state.pokeReducer.pokeURL
    }
}

const PokeSearch = (props)=> {
    useEffect(()=>{
        props.fetchPoke()
    },[])
    return (
      <div>
		<input type="text" onClick={props.Poke.name}></input>
      </div>
    );
  }
  
  export default connect( mapStatetoProps, { fetchPoke })(PokeSearch)