import React from "react";
import { VscAdd } from "react-icons/vsc";
import {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {nanoid} from 'nanoid';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const handleChange = e => {
        e.preventDefault();

        const newTransaction = {
            id: nanoid(),
            text,
            price: +price
        }

        addTransaction(newTransaction);
    }

    return (
        <div className="add-card">
            <textarea className="add-name" placeholder="Car Insurance..." value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <textarea className="add-price" placeholder="-120..." value={price} onChange={(e) => setPrice(e.target.value)}></textarea>
            <VscAdd className="add-button" onClick={handleChange}/>
        </div>
    );
};

export default AddTransaction;