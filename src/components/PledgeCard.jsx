import React, { useState } from "react";

export default function PledgeCard(props) {
    const [inputValue, setInputValue] = useState();

    function handleChange(e) {
        setInputValue((prev) => (e.target.validity.valid ? e.target.value : prev));
    }

    function submitValue(e) {
        e.preventDefault();
        var newValue = parseInt(inputValue);
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.id);

        if (!Number.isNaN(newValue) && newValue >= props.cost) {
            props.addPledgeAmount(newValue);
            props.modalView();
            props.thanksView();

            if (e.target.parentNode.parentNode.parentNode.parentNode.id === "black-edition-stand") {
                props.subtractBlack();
            } else if (e.target.parentNode.parentNode.parentNode.parentNode.id === "bamboo-stand") {
                props.subtractBamboo();
            }
        }
    }

    function noReward(e) {
        e.preventDefault();
        props.modalView();
        props.thanksView();
        props.addBackers();
    }

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

    function pledgeType() {
        if (props.cost === "0") {
            return (
                <div className="pledge-entry-wrapper">
                    <p>Submit your pledge</p>
                    <div className="pledge-entry">
                        <button onClick={noReward}>Continue</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="pledge-entry-wrapper">
                    <p>Enter your pledge</p>
                    <div className="pledge-entry">
                        <input
                            pattern="[0-9]*"
                            onChange={handleChange}
                            type="text"
                            value={inputValue}
                            placeholder={`$ ${props.cost}`}
                        />
                        <button onClick={submitValue}>Continue</button>
                    </div>
                </div>
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
            {pledgeType()}
        </div>
    );
}
