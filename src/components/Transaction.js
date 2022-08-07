import React from "react";
import { VscClose } from "react-icons/vsc";
import {GlobalContext} from "../context/GlobalState";
import {useContext} from "react";

const Transaction = ({transaction}) => {
    const {removeTransaction} = useContext(GlobalContext);

    const sign = transaction.price < 0 ? "-" : "+";

    return (
        <div className={transaction.price < 0 ? "trans-card-red":"trans-card-green"}>
            <span className="trans-name"> {transaction.text} </span>
            <span className="trans-price"> {sign}£{Math.abs(transaction.price)} </span>
            <VscClose className="delete-button" onClick={() => removeTransaction(transaction.id)}/>
        </div>
    );
};

export default Transaction;