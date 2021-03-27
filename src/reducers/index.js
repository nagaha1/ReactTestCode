
action = {
    type: "CREATE_EVENT",
    titile: "イベントフォームのタイトルが来ます",
    body: "イベントフォームのボディがきます"
}

//状態がある、場合と、ない場合で考察をすればOKです。
//状態がない場合
state = [];
//状態がある場合
state = [
    { id: 1, titile: "タイトル1", body: "ボディ1"},
    { id: 2, titile: "タイトル2", body: "ボディ2"},
    { id: 3, titile: "タイトル3", body: "ボディ3"}
    
];


const events = (state = [], action) => {
    // actionにはtypeという属性が必ず渡ってきます
    switch(action.type){
        case "CREATE_EVENT":
            const event = {title: action.title, body: action.body}
            const lengeth = state.length;
            //ああでも、ここのidとかの動きがわからんのです。
            const id = lengeth === 0 ? 1 : state[lengeth - 1].id + 1;
            // let id;
            // if(lengeth === 0){
            //      id = 1;
            // }else{
            //     state[lengeth - 1].id + 1;
            // }
            //このreturnで...stateで現在の要素、{id: id, ...event}で現在の要素の次に新たな要素を返しています。
            return [...state,{id: id, ...event}];
        case "DELETE_EVENT":
            return state;
        case "DELETE_ALL_EVENT":
            return [];
        default:
            return state;
    }
}

//コンポーネントで使用するのでexportします。


export default events;
