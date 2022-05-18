import React from "react";

export default function ProductCard(props) {
    function isStocked() {
        if (props.remaining > 0) {
            return "product " + props.productName;
        } else {
            return "product " + props.productName + " out-of-stock";
        }
    }

    function stockButton() {
        if (props.remaining > 0) {
            return <button className="in-stock">Select Reward</button>;
        } else {
            return <button className="no-stock">Out of stock</button>;
        }
    }
    return (
        <div className={isStocked()}>
            <div className="product-header">
                <h3 className="product-title">{props.productName.replaceAll("-", " ")}</h3>
                <p className="pledge">Pledge ${props.pledgeAmount} or more</p>
            </div>
            <p className="product-description">{props.description}</p>
            <div className="product-footer">
                <div className="product-remaining">
                    <h1>{props.remaining}</h1>
                    <p>left</p>
                </div>
                {stockButton()}
            </div>
        </div>
    );
}
