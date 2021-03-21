import React, { useEffect, useState } from "react";

const App = props => {
  // const [name, setName] = useState(props);
  // setNameが２つ宣言されているのがおかしいと言っています
  const [state, setState] = useState(props);
  // stateを個々に渡していたが、まとめてオブジェクトを渡せます
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  // レンダリングの後で、useEffectは実行されている
  // DOMがレンダリングされた後に、される度に実行がされます
  useEffect(() => {
    console.log("useEffictが取得");
  });

  // useEffectを最初のレンダリングのタイミングの時だけ実行した場合は？
  // 空の配列を渡してあげます
  //第二引数としてからの配列を渡す
  // 特定のDOMの描画するタイミングの時に実行する、、
  useEffect(() => {
    console.log("最初のレンダリングのタイミングの時だけしか、、、");
  }, []);

  useEffect(() => {
    console.log(
      "第二引数の配列の中の要素が呼ばれたタイミングでこちらが呼ばれます"
    );
  }, [state.name]);


  
  const renderPeriod = () => {
    console.log("renderPeriod rendees sssss");
    return "○";
  };

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
        現在の{state.name}は、{state.price}円です。 {renderPeriod()}
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
