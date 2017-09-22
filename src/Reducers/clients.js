const initialState = [
    {
        id: 0,
        name: "Василий",
        description: "Ты как там?",
        lastName: "Васин",
        middleName: "Васильевич",
        email: "123@123",
        phone: "89123211223"
    },
];


export default function clients(state = initialState, action) {
    //a test action to learn how to actions work
    switch (action.type) {
        case 'DISPLAY_ID':
            let clients = state.map((elem) => {
                if (elem.id === action.payload) {
                    let resObj = { ...elem, name: elem.name + elem.id }
                    return resObj
                } else {
                    return elem
                }
            });
            return clients
            //action that set state to loading state
        case "CLIENTS_LOADING":
            return {loading: true}
            //action, that update clients by the data from ajax request emulator
        case "CLIENTS_LOADED":
            return action.payload;
        default:
            return state
    }
}