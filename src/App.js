import React, { useState } from "react";

const App = props => {
  // const [name, setName] = useState(props);
  // setNameが２つ宣言されているのがおかしいと言っています
  const [state, setState] = useState(props);
  // stateを個々に渡していたが、まとめてオブジェクトを渡せます
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  //このようにしてまとめているのね
  const reset = () => {
    // setPrice(props.price);
    // setName(props.name);
    //そもそも表示されているやつが違うところを指している
    setState(props);
  };

  return (
    <>
      <p>
        現在の{state.name}は、{state.price}円です。
      </p>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <p>
        現在の{name}は、{price + 222}円です。
      </p>
      {/* ここがオブジェクトを取得しないとできない */}
      {/* ...stateでオブジェクトを展開して、オブジェクトの中のステータスのpriceをかえたいのです。どう変えるの、state.priceを＋１したいのです、と書いてます */}
      <button onClick={() => setState({ ...state, price: state.price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 1 })}>
        -1
      </button>

      {/* ここのなんで、１回だけ+されるのかが意味不明 */}
      <button onClick={() => setState({ ...state, price: price + 10 })}>
        +10
      </button>
      <button onClick={() => setState({ ...state, price: state.price + 10 })}>
        +10
      </button>

      <button onClick={reset}>Reset</button>
      <input
        value={state.name}
        onChange={
          //setNameで状態をとっているので書き換えているだけ。
          //ここが、stateでオブジェクトを展開して、オブジェクトの中の何を変えるの？だから、nameだけでよいとなっています
          e => setState({ ...state, name: e.target.value })
        }
      />
    </>
  );
};

//これでやると外部から引数とる
//ページをリロードしたらできました。
App.defaultProps = {
  name: "sample",
  price: 1000
};

export default App;
