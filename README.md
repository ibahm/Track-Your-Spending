<p align="center"><img width="100" src="https://spng.subpng.com/20180205/lte/kisspng-pound-sign-pound-sterling-icon-libra-png-image-5a77fa2146a754.5235916015178122572894.jpg" alt="GBP Image"></p>
<h1 align="center">Track Your Spending</h1>
<p align="center">A web application that allows you to track your financial activity with your income and total difference shown.</p>

# Access
You can visit an up-to-date version of the site <a href="https://simplyfinance.netlify.app/">here</a>.

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
    transactions : []
}

...

const localData = localStorage.getItem('track-your-spending');
return localData ? JSON.parse(localData) : initialState;
```
**Saving data to local storage.**
```react.js
useEffect(() => {
        localStorage.setItem('track-your-spending', JSON.stringify(state));
    }, [state]);
```
# Languages and libraries
- HTML
- CSS
- Javascript
- React
