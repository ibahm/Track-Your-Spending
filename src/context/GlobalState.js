import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer';

// Fetches data on from local storage whenever state is updated
const initialState = {
    transactions : JSON.parse(localStorage.getItem('track-your-spending'))
}

export const GlobalContext = createContext(initialState);

// Provider comp
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Save to local storage when state.transactions changes
    useEffect(() => {
        localStorage.setItem('track-your-spending', JSON.stringify(state.transactions));
        console.log(state.transactions);
    }, [state.transactions]);

    // Calls to reducer and uses dispatch to remove 
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