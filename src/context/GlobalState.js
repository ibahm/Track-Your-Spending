import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions : []
}

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    // Check if local Storage has data to use otherwise use initialState
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('track-your-spending');
        return localData ? JSON.parse(localData) : initialState;
    });

    // State array changes are saved to local storage
    useEffect(() => {
        localStorage.setItem('track-your-spending', JSON.stringify(state));
    }, [state]);

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