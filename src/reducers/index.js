
//状態がある、場合と、ない場合で考察をすればOKです。

const events = (state = [], action) => {
    // actionにはtypeという属性が必ず渡ってきます
    switch(action.type){
        case "CREATE_EVENT":
            const event = {title: action.title, body: action.body}
            const lengeth = state.length;
            const id = lengeth === 0 ? 1 : state[lengeth - 1].id + 1;
            // let id;
            // if(lengeth === 0){

            // }else{
            //     state[lengeth - 1].id + 1;
            // }
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
