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
        //action that set state to loading state
        case "CLIENTS_LOADING":
            return { loading: true }
        //action, that update clients by the data from ajax request emulator
        case "CLIENTS_LOADED":
            return action.payload;
        case "CLIENTS_EDITING_LOADING":
            return state;
        //when client edited
        case "CLIENT_EDITED":
            let clientsNew = state.slice();
            clientsNew.forEach((elem, index) => {
                if (elem.id === action.payload.id) {
                    clientsNew[index] = action.payload;
                }
            });
            return clientsNew;
        case "CLIENTS_ADDING_LOADING":
            return state
        //when new client added
        case "CLIENT_ADDED":
            let clientsNewAdded = state.slice()
            clientsNewAdded.push(action.payload)
            return clientsNewAdded;
        default:
            return state
    }
}