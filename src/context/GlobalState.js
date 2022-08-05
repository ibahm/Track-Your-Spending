import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id: 1, text: 'STEAM', amount: -50},
        {id: 2, text: 'NANDOS', amount: -30},
        {id: 3, text: 'SAVINGS', amount: +80}
    ]
}

export const GlobalContext = createContext(initialState);

// Provider comp
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}