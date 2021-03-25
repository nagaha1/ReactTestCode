import React, {createContext, useReducer, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

// import reducer from "../reducers/index.js";
//ここ省略もできて 以下でも同じ意味になるよ
import reducer from "../reducers";
import test from "../reducers/test.js";


const App = () => {

  const [state, dispatch] = useReducer(reducer,[]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [ttse, setTtse] = useState(test);

  const addEvent = e => {
    //再レンダリングを抑止するためにeの仮引数で、e.preventDefault();としてます。
    e.preventDefault();
    // console.log({title,body});

    dispatch({
      type: "CREATE_EVENT",
      title,
      body
    });

    setTitle("");
    setBody("");
  }

  

  console.log("~~~~~~~~~~~~~~~");  
  console.log(ttse.aaa);
  console.log(ttse.bbb);
  console.log(ttse);
  console.log({...test});
  console.log("####################"); 

  // const aareee = () => {
  //   setTtse(ttse = "hhhhhhhhhh");
  // }

  
  const ae = e => {
    // useStateの使い方忘れた
    //再レンダリングを抑止するためにeの仮引数で、e.preventDefault();としてます。
    e.preventDefault();
    setTtse(ttse.aaa = "なるほどね");
    console.log(ttse.bbb = "再レンダリング後");
    console.log(ttse);
    console.log({...ttse});
  }



  return(
    <>
      <div className="container-fluid">
        <h4>{ttse.aaa}</h4>
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
          <button className="btn btn-danger" onClick={ae}>全てのイベントを削除する</button>
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
              <tr>
                <th></th>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
   </>
  ); 
};

export default App;

