import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

// Provider comp
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //calls to reducer and uses dispatch to remove 
    function removeTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        removeTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}