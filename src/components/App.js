import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EventFrom from "./EventFrom"

import Events from './Events'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  
  // const unCreatable = title === "" || body === "";

  // 変数使ってもいいけどこれぐらいだったら直接書いたほうが良い
  // const unCre = state.length === 0;
  

  return (
    <div className="container-fluid">
      {/* これで呼べる、コンポーネントを呼び出しています */}
      <EventFrom state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>

      
    </div>
  )
}

export default App