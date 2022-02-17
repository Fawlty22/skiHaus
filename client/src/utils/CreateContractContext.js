import React, { createContext, useContext } from "react";
import { useEmployeeReducer } from './reducers'

const CreateContractContext = createContext();
const { CreateContractProvider } = CreateContractContext;

const CreateContractStoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useEmployeeReducer({
        createContractData: {}
    })

    console.log(state);

    return <CreateContractProvider value={[state, dispatch]} {...[props]} />
}
const useCreateContractContext = () => {
    return useContext(CreateContractContext)
}

export { CreateContractStoreProvider, useCreateContractContext }

