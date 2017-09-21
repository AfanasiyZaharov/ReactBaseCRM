
/*
    function that emulates loading data from server
*/
export function loadingClients() {
    return (dispatch) => {
        dispatch({
            type: "CLIENTS_LOADING",
        });


        setTimeout(() => {
            dispatch({
                type: 'CLIENTS_LOADED',
                payload: [
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
                    {
                        id: 2,
                        name: "Привет",
                        description: "мир"
                    },
                    {
                        id: 3,
                        name: "Свободу",
                        description: "попугаям"
                    },
                ]
            })
        }, 3000);
    }
}