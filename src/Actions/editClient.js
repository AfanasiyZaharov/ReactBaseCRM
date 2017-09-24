import { CLIENTS_EDITING_LOADING, CLIENT_EDITED } from '../Constants/Constants'

/*
    An action, that edit client
*/
export function editClient(clientFormData) {



    return (dispatch) => {
        console.log(dispatch);
        dispatch({
            type: CLIENTS_EDITING_LOADING,
        });

        setTimeout(() => {
            dispatch({
                type: CLIENT_EDITED,
                payload: clientFormData
            });

        }, 300);

    }
};