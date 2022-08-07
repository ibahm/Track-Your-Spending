# Track Your Spending
A web application that allows you to track your financial activity with your income and total difference shown.

# Approach
**Used Context API rather than passing props through multiple useState hooks. Implemented App Reducer to allow the state to call actions.**

```react.js
case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            }
```
```react.js
function removeTransaction (id) {
            dispatch({
                        type: 'DELETE_TRANSACTION',
                        payload: id,
            )};
}
```

```react.js
<GlobalContext.Provider value={{
        transactions:state.transactions,
        removeTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
```
**Fetching data from local storage on initial render.**
```react.js
const initialState = {
    transactions : JSON.parse(localStorage.getItem('track-your-spending'))
}
```
**Saving data to local storage.**
```react.js
useEffect(() => {
        localStorage.setItem('track-your-spending', JSON.stringify(state.transactions));
        console.log(state.transactions);
    }, [state.transactions]);
```
# Languages and libraries
- HTML
- CSS
- Javascript
- React
