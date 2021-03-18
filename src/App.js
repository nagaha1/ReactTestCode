import React,{ useState } from 'react';

const App = props => {
  const [name,setName] = useState(props.name);
  const [price,setPrice] = useState(props.price);

  //このようにしてまとめているのね
  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <p>現在の{name}は、{price + 222}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price + 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={
        //setNameで状態をとっているので書き換えているだけ。
        e => setName(e.target.value)
      }/>
    </>
  );

  
}

//これでやると外部から引数とる
//ページをリロードしたらできました。
App.defaultProps = {
  name: "sample",
  price: 1000
}

export default App;
