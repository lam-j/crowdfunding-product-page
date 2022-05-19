import React from "react";

export default function ThanksModal(props) {
    return (
        <div className="thanks-modal-main">
            <div className="thanks-logo">
                <img src="/images/icon-check.svg" alt="checkmark" />
            </div>
            <div className="thanks-body">
                <h2>Thanks for your support!</h2>
                <p>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor
                    Riser worldwide. You will get an email once our campaign is completed.
                </p>
            </div>
            <div className="thanks-button">
                <button onClick={props.thanksView}>Got it!</button>
            </div>
        </div>
    );
}
