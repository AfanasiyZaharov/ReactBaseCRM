

import {CLIENTS_LOADING, CLIENTS_LOADED } from '../Constants/Constants'
/*
    function that emulates loading data from server
*/
export function loadingClients() {
    
    return (dispatch) => {
        dispatch({
            type: CLIENTS_LOADING,
        });


        setTimeout(() => {
            dispatch({
                type: CLIENTS_LOADED,
                payload: [
                    {
                        id: 0,
                        name: "Василий",
                        description: "Ты как там?",
                        lastName: "Васин",
                        middleName: "Васильевич",
                        email: "123@123",
                        phone: "89123211223"
                    },
                    {
                        id: 1,
                        name: "Дред",
                        description: "черепаха",
                        lastName: "Васин",
                        middleName: "Васильевич",
                        email: "123@123",
                        phone: "89123211223"
                    },
                    {
                        id: 2,
                        name: "Привет",
                        description: "мир",
                        lastName: "Васин",
                        middleName: "Васильевич",
                        email: "123@123",
                        phone: "89123211223"
                    },
                    {
                        id: 3,
                        name: "Свободу",
                        description: "попугаям",
                        lastName: "Васин",
                        middleName: "Васильевич",
                        email: "123@123",
                        phone: "89123211223"
                    },
                ]
            })
        }, 150);
    }
}