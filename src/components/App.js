import React, { useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
     type: 'CREATE_EVENT',
     title,
     body
    })

    setTitle('')
    setBody('')
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* これタイプミスとかではなくて、使用が変わっている気がする */}
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          {/* {
            state.map((event,index) => {
              const id = event.id
              const handleClickDeleteButton = () => {
                dispatch({type: "DELETE_EVENT", id})
              }

              return (
                //この書き方だと上手く表示されない理由がわからない
                <tr key={index}>
                  <tb>{id}</tb>
                  <tb>{event.title}</tb>
                  <tb>{event.body}</tb>
                  <tb><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></tb>
                </tr>
              )
            })
          } */}
        </tbody>
      </table>
    </div>
  )
}

export default App