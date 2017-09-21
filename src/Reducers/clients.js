const initialState = [
    {
        id: 0,
        name: "Василий",
        description: "Ты как там?"
    },
    {
        id: 1,
        name: "Дред",
        description: "черепаха"
    },
];


export default function clients(state = initialState, action) {
//a test action to learn how to actions work
    switch (action.type) {
        case 'DISPLAY_ID':
            let clients = state.map((elem) => {
                if (elem.id === action.payload){
                    let resObj = {...elem, name: elem.name +elem.id}
                    elem.name +=elem.id;
                    return elem
                }else{
                    return elem
                }
            });
            return clients
        default:
            return state
    }
}