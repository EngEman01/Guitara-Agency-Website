import React, { useState, useEffect } from "react";
import './Cards.css';

export default function Cards() {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 5; // Set to display 5 cards at a time

    useEffect(() => {
        // Fetch data from Cards.json
        fetch('./Cards.json') // Update with the correct path to your JSON file
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const nextPage = () => {
        if (currentIndex + cardsPerPage < cards.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const prevPage = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    return (
        <div className="card-section">
            <div className="card-container">
                {cards.slice(currentIndex, currentIndex + cardsPerPage).map(card => (
                    <div key={card.id} className="card">
                        <div className="card-image">
                            <img src={card.photo} alt={card.name} />
                        </div>
                        <div className="card-content">
                            <div>{card.name}</div>
                            <div>{card.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigation-buttons">
                <button onClick={prevPage} disabled={currentIndex === 0}>
                    ◀
                </button>
                <button onClick={nextPage} disabled={currentIndex + cardsPerPage >= cards.length}>
                    ▶
                </button>
            </div>
        </div>
    );
}