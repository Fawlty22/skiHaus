import { useReducer } from 'react';

//import actions
import {
    UPDATE_EMPLOYEE
} from './actions'

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_EMPLOYEE: 
        return {
            ...state,
            employee: action.payload.employee,
            token: action.payload.token
        };
    }
}

export function useEmployeeReducer(initialState) {
    return useReducer(reducer, initialState);
}