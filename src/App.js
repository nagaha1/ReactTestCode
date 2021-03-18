import React,{ useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  // console.log({count});
  // console.log({setCount});
  
  const increment = () => setCount(
                              count + 1,
                              console.log(count),
                              console.log("bbbbbeeeeeeeee")
                          );

  const decrement = () => setCount(count - 1);                        
  const increment2 = () => setCount(testCount => testCount + 1);                        
  // const decrement2 = () => setCount(testCount => testCount - 1);                        
  const decrement2 = () => setCount(
    function test(){
      //これでやるなら、returnをちゃんとしないとだめ
      return count - 10;
    }
  );                        
  
  //この実装センスある気がする。
  // const reset = () => setCount(
  //   count - count
  // );

  // 違った
  // これの方がスマート
  const reset = () => setCount(0);

  const xx = () => setCount(count*2);

  const san = () => setCount(
    //関数を書かないと
    //仮引数として、countが来ますと
    function sanSet(a){
      if(a % 3 === 0){
        return a / 3
      }else{
        return a
      }
    }
  );

  return (
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={xx}>X2</button>
        <button onClick={san}>3の倍数のときだけ3で割ります</button>
      </div>
    </>
  );
}

export default App;
