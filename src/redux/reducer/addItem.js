const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.typr) {
        case "ADDITEM" : return[
            ...state,
            action.payload
        ]
        break;
    
        case "DELITEM" :
            return state = state.filter((x) => {
                return x.id !== action.payload.id
            })
        break;

        default: return state;
    }
}

export default addItems