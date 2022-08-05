import React from "react";
import Transaction from "./Transaction";
import AddTransaction from "./AddTransaction";
import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);


    return (
        <div className="trans-list">
            <AddTransaction/>

            {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
            
        </div>
    );
};

export default TransactionList;