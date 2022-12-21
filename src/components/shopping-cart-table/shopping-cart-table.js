import React from "react";
import { connect } from "react-redux";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({ items, total,
        onIncrease, onDecrease, onDelete }) => {
    
    const renderRow = (item, idx) => {
        const { id, name, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
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

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => console.log(`Increase ${id}`),
        onDecrease: (id) => console.log(`Decrease ${id}`),
        onDelete: (id) => console.log(`Delete ${id}`)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
