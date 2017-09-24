/*
    An action, that add client
*/

export function addClient(clientFormData) {



    return (dispatch) => {
        console.log(dispatch);
        dispatch({
            type: "CLIENTS_ADDING_LOADING",
        });

        setTimeout(() => {

            //here we emulate a new id in data from server - 
            clientFormData.id =  10000- (Math.floor(Math.random() * (300 - 0)) + 10);

            dispatch({
                type: "CLIENT_ADDED",
                payload: clientFormData
            });

        }, 300);

    }
}