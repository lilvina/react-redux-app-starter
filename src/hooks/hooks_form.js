import React, {useState, useReducer, useContext} from 'react'
import * as ACTIONS from '../store/actions/actions'
import * as UserReducer from '../store/hooks_state/user_input_hook'
import Context from '../utils/context'

const HooksForm = () => {
  const context = useContext(Context)

  const [valueChange, setValueChange] = useState('')
  const [valueSubmit, setValueSubmit] = useState('')

  const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

  const handleUseStateChange = (event) => {
    setValueChange(event.target.value)
  }

  const handleUseStateSubmit = (event) => {
    event.preventDefault()
    setValueSubmit(event.target.useState.value)
  }

  const handleUseReducerChange = (event) => {
    userDispatch(ACTIONS.user_input_change(event.target.value))
  }

  const handleUseReducerSubmit = (event) => {
    event.preventDefault()
    userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
  }
  return(
    <div>
      <form onSubmit={handleUseStateSubmit}>
        <label>React useState: </label>
        <input id="useState" type="text" onChange={handleUseStateChange}/>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleUseReducerSubmit}>
        <label>React useReducer: </label>
        <input id="useReducer" type="text" onChange={handleUseReducerChange}/>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={context.useContextHandleSubmit}>
        <label>React useContext: </label>
        <input id="useContext" type="text" onChange={context.useContextHandleChange}/>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>React useState:</h2>
        <p>Change: {valueChange}</p>
        <p>Submit: {valueSubmit}</p>
        <br/>
        <h2>React useReducer:</h2>
        <p>Change: {userState.user_text_change}</p>
        <p>Submit: {userState.user_text_submit}</p>
        <br />
        <h2>React useContext:</h2>
        <p>Change: {context.useContextChange}</p>
        <p>Submit: {context.useContextSubmit}</p>
      </div>
    </div>
  )
}

export default HooksForm;
