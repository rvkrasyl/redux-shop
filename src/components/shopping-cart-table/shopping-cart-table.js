import React from "react";

import "./shopping-cart-table.css";

const ShoppingCartTable = ({ items, total,
        onIncrease, onDecrease, onDelete }) => {
    
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button 
                    onClick={() => onIncrease(id)}
                    className="btn btn-outline-success">
                        <i className="fa-solid fa-circle-plus float-right" />
                    </button>
                    <button 
                    onClick={() => onDecrease(id)}
                    className="btn btn-outline-warning">
                        <i className="fa-solid fa-circle-minus float-right" />
                    </button>
                    <button 
                    onClick={() => onDelete(id)}
                    className="btn btn-outline-danger">
                        <i className="fa-solid fa-trash float-right" />
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody> 
                    { items.map(renderRow) } 
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

export default ShoppingCartTable;
