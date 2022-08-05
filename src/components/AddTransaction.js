import React from "react";
import { VscAdd } from "react-icons/vsc";
import {useState} from "react";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');
    return (
        <div className="add-card">
            <textarea className="add-name" placeholder="Type a name..." value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <textarea className="add-price" placeholder="Type a price..." value={price} onChange={(e) => setPrice(e.target.value)}></textarea>
            <VscAdd className="add-button" onClick={() => {}}/>
        </div>
    );
};

export default AddTransaction;