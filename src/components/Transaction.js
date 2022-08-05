import React from "react";
import { VscClose } from "react-icons/vsc";

const Transaction = ({transaction}) => {

    return (
        <div className="trans-card">
            <span className="trans-name"> {transaction.text} </span>
            <span className="trans-price"> {transaction.amount} </span>
            <VscClose className="delete-button"/>
        </div>
    );
};

export default Transaction;