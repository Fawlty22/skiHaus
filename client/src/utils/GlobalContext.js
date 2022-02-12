import React, { createContext, useContext } from 'react';
import { useEmployeeReducer } from './reducers';

const StoreContext = createContext()
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [ state, dispatch] = useEmployeeReducer({
        employee: { _id: '', token: '' }, 
        customers: []
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };