import React from "react";
import { VscEdit } from "react-icons/vsc";
import {GlobalContext} from "../context/GlobalState";
import {useContext} from "react";

const NavBar = () => {
    const {transactions} = useContext(GlobalContext);

    const prices = transactions.map(transaction => transaction.price);

    const total = prices.reduce((pVal, cVal) => (pVal + cVal)).toFixed(2);

    return (
        <div className="nav-bar">
            <h1 className="nav-title">Track Your Spending</h1>
            <ul>
                <li className="budget-container">
                    <span className = "budget">£5000</span>
                    <VscEdit className="edit-budget"/>
                </li>
                <li className="item-2"><span className="expense">£5500</span></li>
                <li className="item-3"><span className="total">£{total}</span></li>
            </ul>
        </div>
    );
};

export default NavBar;