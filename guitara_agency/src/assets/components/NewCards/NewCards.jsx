import React, { useState, useEffect } from 'react';
import './NewCards.css'; // Ensure your CSS file is correctly linked

export default function NewCards() {
  const [cards, setCards] = useState([]);

  // Fetch the data from a JSON file
  useEffect(() => {
    fetch('./Cards.json') // Adjust path to your JSON file
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching cards:', error));
  }, []);

  return (
    <div className="container">
      <div className="card__container">
        {cards.map((card) => (
          <article key={card.id} className="card__article">
            <img src={card.photo} alt={card.name} className="card__img" />

            <div className="card__data">
              <span className="card__description">{card.description}</span>
              <h2 className="card__title">{card.title}</h2>
              {/* <a href={card.link} className="card__button">Read More</a> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
