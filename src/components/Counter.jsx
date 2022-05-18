import React from "react";

export default function Counter(props) {
    var amountRaised = parseFloat(props.amountRaised.replaceAll(",", ""));
    var goal = parseFloat(props.goal.replaceAll(",", ""));
    var progress = (amountRaised / goal) * 100;

    return (
        <div className="counter">
            <div className="counter-categories">
                <div className="total-amount">
                    <h1 className="amount-raised">${props.amountRaised}</h1>
                    <p className="goal">of ${props.goal} backed</p>
                </div>
                <div className="backers">
                    <h1>{props.backers}</h1>
                    <p>total backers</p>
                </div>
                <div className="time-remaining">
                    <h1 className="time-amount">{props.daysRemaining}</h1>
                    <p className="time-label">days left</p>
                </div>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}
