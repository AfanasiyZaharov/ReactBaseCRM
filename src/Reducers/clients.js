import { CLIENTS_LOADING, CLIENTS_LOADED, CLIENTS_EDITING_LOADING, CLIENT_EDITED, CLIENTS_ADDING_LOADING, CLIENT_ADDED } from '../Constants/Constants';

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

/*
    main clients reducer
*/
export default function clients(state = initialState, action) {
    //a test action to learn how to actions work
    switch (action.type) {
        //action that set state to loading state
        case CLIENTS_LOADING:
            return { loading: true };
        //action, that update clients by the data from ajax request emulator
        case CLIENTS_LOADED:
            return action.payload;
        case CLIENTS_EDITING_LOADING:
            return { loading: true };
        //when client edited
        case CLIENT_EDITED:
            let currentClients = state.slice();
            let editedClient = action.payload;
            currentClients.forEach((elem, index) => {
                if (elem.id === action.payload.id) {
                    currentClients[index] = editedClient;
                }
            });
            return currentClients;
        case CLIENTS_ADDING_LOADING:
            return { loading: true };
        //when new client added
        case CLIENT_ADDED:
            let existingClients = state.slice();
            let newlyAddedClient = action.payload;
            existingClients.push(newlyAddedClient);

            return existingClients;
        default:
            return state;
    }
};


