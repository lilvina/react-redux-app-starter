import React, {useState, useEffect, useReducer, useContext} from 'react';
//import Routes from './routes';
import * as Reducer from '../store/hooks_state/hooks_reducers';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context';

const HooksContainer = () => {
    const context = useContext(Context)
    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState(null)

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    const incrementValue = () => {
      setValue(stateValue + 1)
    }

    useEffect(() => {
      setTimeout(() => setUseEffectValue("useEffect worked! Yay!"), 3000)
    }, [stateValue])

    const decrementValue = () => {
      setValue(stateValue - 1)
    }

    const changeUseEffectValue = () => {
      setUseEffectValue('Some string')
    }

    const handleDispatchTrue = () => {
      dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
      dispatch(ACTIONS.failure())
    }

    return(
      <div>
        React Hooks
        <br/>
        <button onClick={ () => incrementValue()}>Inc Local State</button>
        <button onClick={ () => decrementValue()}>Inc Local State</button>
        <button onClick={ () => changeUseEffectValue()}>Change Use Effect</button>
        <button onClick={ () => handleDispatchTrue()}>Dispatch True</button>
        <button onClick={ () => handleDispatchFalse()}>Dispatch False</button>
        <button onClick={ () => context.addGlobalValue()}>Dispatch True</button>
        <button onClick={ () => context.decGlobalValue()}>Dispatch False</button>
        <button onClick={ () => context.dispatchContextTrue()}>Dispatch Context True</button>
        <button onClick={ () => context.dispatchContextFalse()}>Dispatch Context False</button>
        <br/>
        <div>
        <br/>
          <p>{useEffectValue
                ? <p>{useEffectValue}</p>
                : <p>No Value</p>
              }</p>
              <br />
              {state.stateprop1
                ? <p>state prop1 is true</p>
                : <p>state prop1 is false</p>
              }
              <br/>
              {context.reducerGlobalState
                ? <p>state prop2 is true</p>
                : <p>state prop2 is false</p>
              }
              <br/>
          <p>Local State: {stateValue}</p>
          <br/>
          <p>Global State: {context.valueGlobalState}</p>
        </div>
      </div>
    )
}


export default HooksContainer;
