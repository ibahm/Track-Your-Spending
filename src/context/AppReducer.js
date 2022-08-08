export default (state, action) => {
    // State sits at the top of the tree and can call actions to send up and down
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            }
            // Return the transactions and the new one in the payload
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}