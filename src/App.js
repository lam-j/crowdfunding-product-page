import React, { useState, useEffect } from "react";
import Intro from "./components/ProductIntro.jsx";
import Counter from "./components/Counter.jsx";
import Product from "./components/ProductCard.jsx";
import PledgeModal from "./components/PledgeModal.jsx";

function App() {
    const [isModalActive, setModal] = useState(false);

    function modalView() {
        setModal((prev) => !prev);
    }

    useEffect(() => {
        toggleModalActiveClass();
    }, [isModalActive]);

    function toggleModalActiveClass() {
        if (document.querySelector(".pledge-modal").classList.contains("active")) {
            document.querySelector(".pledge-modal").classList.toggle("active");
            document.querySelector(".shadow").classList.toggle("active");
        } else {
            document.querySelector(".pledge-modal").classList.add("active");
            document.querySelector(".shadow").classList.add("active");
        }
    }

    return (
        <div className="wrapper-wrapper">
            <div className="pledge-modal">
                <PledgeModal modalView={modalView} title="Mastercraft Bamboo Monitor Riser" />
            </div>
            <div className="shadow"></div>
            <div className="wrapper">
                <div className="header">
                    <img className="logo" src="/images/logo.svg" alt="crowdfund" />
                    <div className="navigation">
                        <a href="#about">About</a>
                        <a href="#discover">Discover</a>
                        <a onClick={modalView}>Get Started</a>
                    </div>
                </div>
                <div className="main-container">
                    <Intro
                        modalView={modalView}
                        logo="images/logo-mastercraft.svg"
                        alt="mastercraft"
                        title="Mastercraft Bamboo Monitor Riser"
                        subtitle="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
                    />
                    <Counter
                        amountRaised="89,914"
                        goal="100,000"
                        backers="5,007"
                        daysRemaining="56"
                    />
                    <div className="about">
                        <h3 id="about" className="about-header">
                            About this project
                        </h3>
                        <p className="about-description">
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
                            that elevates your screen to a more comfortable viewing height. Placing
                            your monitor at eye level has the potential to improve your posture and
                            make you more comfortable while at work, helping you stay focused on the
                            task at hand.
                            <br />
                            <br />
                            Featuring artisan craftsmanship, the simplicity of design creates extra
                            desk space below your computer to allow notepads, pens, and USB sticks
                            to be stored under the stand.
                        </p>
                        <div id="discover" className="products">
                            <Product
                                modalView={modalView}
                                productName="bamboo-stand"
                                pledgeAmount="25"
                                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
                                            campaign, and you’ll be added to a special Backer member list."
                                remaining="101"
                            />

                            <Product
                                modalView={modalView}
                                productName="black-edition-stand"
                                pledgeAmount="75"
                                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
                                            campaign, and you’ll be added to a special Backer member list."
                                remaining="64"
                            />

                            <Product
                                modalView={modalView}
                                productName="mahogany-special-edition"
                                pledgeAmount="200"
                                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
                                            campaign, and you’ll be added to a special Backer member list."
                                remaining="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
