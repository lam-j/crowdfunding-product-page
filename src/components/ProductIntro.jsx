import React, { useState } from "react";

export default function ProductIntro(props) {
    const [isBookmarked, setBookmark] = useState(false);

    function handleBookmark() {
        setBookmark((prev) => !prev);
    }

    function bookmarkButton() {
        if (isBookmarked) {
            return (
                <button className="bookmark active" onClick={handleBookmark}>
                    <img src="./images/icon-bookmark.svg" alt="bookmark" /> Bookmarked
                </button>
            );
        } else {
            return (
                <button className="bookmark" onClick={handleBookmark}>
                    <img src="./images/icon-bookmark.svg" alt="bookmark" /> Bookmark
                </button>
            );
        }
    }

    return (
        <div className="product-intro">
            <img className="product-logo" src={props.logo} alt={props.alt} />
            <div className="intro-text">
                <h2 className="title">{props.title}</h2>
                <p className="subtitle">{props.subtitle}</p>
            </div>
            <div className="intro-buttons">
                <button className="cta">Back this project</button>
                {bookmarkButton()}
            </div>
        </div>
    );
}
