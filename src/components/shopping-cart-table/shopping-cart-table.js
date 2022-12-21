import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>TheBook</td>
                        <td>3</td>
                        <td>$41</td>
                        <td>
                            <button className="btn btn-outline-danger">
                                <i className="fa-solid fa-trash" />
                            </button>
                            <button className="btn btn-outline-success">
                                <i className="fa-solid fa-circle-plus" />
                            </button>
                            <button className="btn btn-outline-warning">
                                <i className="fa-solid fa-circle-minus" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="total">
                Total: $123
            </div>
        </div>
    );
}

export default ShoppingCartTable;
