import React, { useState } from "react";
import PledgeCard from "./PledgeCard.jsx";

export default function PledgeModal(props) {
    function handleCardClick(e) {
        console.log(e.target.parentNode.parentNode.parentNode.id);
        if (!e.target.parentNode.parentNode.classList.contains("active-card")) {
            document.querySelectorAll(".pledge-card-wrapper").forEach((card) => {
                card.classList.remove("active-card");
            });
            e.target.parentNode.parentNode.classList.add("active-card");
        }
    }

    return (
        <div className="pledge-modal-main">
            <button onClick={props.modalView}>
                <img src="images/icon-close-modal.svg" alt="close" />
            </button>
            <h2>Back this project</h2>
            <p>{"Want to support us in bringing " + props.title + " out in the world?"}</p>
            <form className="pledge-form">
                <div id="no-reward">
                    <PledgeCard
                        thanksView={props.thanksView}
                        modalView={props.modalView}
                        addPledgeAmount={props.addPledgeAmount}
                        addBackers={props.addBackers}
                        onClick={handleCardClick}
                        title="Pledge with no reward"
                        subtitle="Choose to support us
                                    without a reward if you simply believe in our project. 
                                    As a backer, you will be signed up to receive product 
                                    updates via email."
                        cost="0"
                    />
                </div>
                <div id="bamboo-stand">
                    <PledgeCard
                        thanksView={props.thanksView}
                        modalView={props.modalView}
                        addPledgeAmount={props.addPledgeAmount}
                        addBackers={props.addBackers}
                        subtractBamboo={props.subtractBamboo}
                        subtractBlack={props.subtractBlack}
                        onClick={handleCardClick}
                        title="Bamboo Stand"
                        subtitle=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to
                                    a special Backer member list."
                        cost="25"
                        remaining={props.bambooRemaining}
                    />
                </div>

                <div id="black-edition-stand">
                    <PledgeCard
                        thanksView={props.thanksView}
                        modalView={props.modalView}
                        addPledgeAmount={props.addPledgeAmount}
                        addBackers={props.addBackers}
                        subtractBamboo={props.subtractBamboo}
                        subtractBlack={props.subtractBlack}
                        onClick={handleCardClick}
                        title="Black Edition Stand"
                        subtitle="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                    member list. Shipping is included."
                        cost="75"
                        remaining={props.blackRemaining}
                    />
                </div>

                <div id="mahogany-special-edition">
                    <PledgeCard
                        thanksView={props.thanksView}
                        modalView={props.modalView}
                        addPledgeAmount={props.addPledgeAmount}
                        addBackers={props.addBackers}
                        onClick={handleCardClick}
                        className="pledge-card"
                        title="Mahogany Special Edition"
                        subtitle="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll
                                    be added to our Backer member list. Shipping is included."
                        cost="200"
                        remaining="0"
                    />
                </div>
            </form>
        </div>
    );
}
