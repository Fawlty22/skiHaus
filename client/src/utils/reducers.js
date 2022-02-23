import { useReducer } from 'react';

//import actions
import {
    UPDATE_EMPLOYEE,
    UPDATE_USERS,
    UPDATE_CONTRACT_DATA
} from './actions'

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_EMPLOYEE: 
        return {
            ...state,
            employee: action.payload.employee,
            token: action.payload.token
        };
        case UPDATE_USERS: 
        return {
            ...state,
            users: [...action.payload.users]
        };
        case UPDATE_CONTRACT_DATA:
        return {
            ...state,
            contracts: [...action.payload.contracts]
        }
    }
}

export function useEmployeeReducer(initialState) {
    return useReducer(reducer, initialState);
}
