import React from "react";
import {GlobalContext} from "../context/GlobalState";
import {useContext} from "react";

const NavBar = () => {
    const {transactions} = useContext(GlobalContext);
    const prices = transactions.map(transaction => transaction.price);

    //Add to document understanding of conditional statements
    const total = prices.reduce((pVal, cVal) => (pVal + cVal), 0).toFixed(2);
    const income = prices.filter(cVal => cVal > 0).reduce((pVal, cVal) => (pVal += cVal), 0).toFixed(2);

    return (
        <div className="nav-bar">
            <h1 className="nav-title">Track Your Spending</h1>
            <ul>
                <li className="item-2"><span className="income"><b>In £{income}</b></span></li>
                <li className={total < 0 ? "total-red":"total-green"}><span className="total" ><b>Total £{total}</b></span></li>
            </ul>
        </div>
    );
};

export default NavBar;