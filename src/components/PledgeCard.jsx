import React from "react";

export default function PledgeCard(props) {
    function inStock() {
        if (props.remaining === "0") {
            return <input className="radio-button" type="radio" name="pledge" />;
        } else {
            return (
                <input
                    onClick={props.onClick}
                    className="radio-button"
                    type="radio"
                    name="pledge"
                />
            );
        }
    }

    return (
        <div
            className={
                props.remaining === "0" ? "pledge-card-wrapper out-of-stock" : "pledge-card-wrapper"
            }>
            <div className="pledge-card">
                {inStock()}
                <label>
                    <div className="pledge-card-header">
                        <h4>
                            {props.title}
                            <span>{props.cost !== "0" && ` Pledge $${props.cost} or more`}</span>
                        </h4>
                        <div className="amount-remaining">
                            {props.cost !== "0" && (
                                <>
                                    <h3>{props.remaining}</h3>
                                    <p>left</p>
                                </>
                            )}
                        </div>
                    </div>
                    <p className="pledge-card-subtitle">{props.subtitle}</p>
                </label>
            </div>
            <hr />
            <div className="pledge-entry-wrapper">
                <p>Enter your pledge</p>
                <div className="pledge-entry">
                    <input type="text" placeholder={`$ ${props.cost}`} />
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}
