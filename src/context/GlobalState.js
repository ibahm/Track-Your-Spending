import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';
import {nanoid} from 'nanoid';

const initialState = {
    transactions: [
        {id: {nanoid}, text: 'Steam', price: -50},
        {id: {nanoid}, text: 'Nandos', price: -130},
        {id: {nanoid}, text: 'Savings', price: +545.99}
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