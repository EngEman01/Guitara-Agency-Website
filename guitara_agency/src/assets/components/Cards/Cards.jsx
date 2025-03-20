import React, { useState, useEffect } from "react";
import "./Cards.css"; 

export default function BookStore() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 5; 

  useEffect(() => {
    fetch("./Cards.json") 
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
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
   <div className="book-menu">
    <div className="blur-section"></div>
     <div className="book-store">
       <div className="book-slide">
         <div className="book js-flickity" data-flickity-options='{"wrapAround": true}'>
           {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card) => (
             <div key={card.id} className="book-cell">
               <div className="book-img">
                 <img src={card.photo} alt={card.name} className="book-photo" />
               </div>
               <div className="book-content">

               <img src={card.icon} className="photo" />

                 <h1 className="book-author"> User: {card.author}</h1>
                {/* <div className="rate">
                  <fieldset className="rating">
                    <input type="checkbox" id={`star-${card.id}`} name="rating" value="5" />
                    <label className="full" htmlFor={`star-${card.id}`}></label>
                  </fieldset>
                  <span className="book-voters">{card.voters} voters</span>
                </div> */}
                 <div className="book-sum">ID: {card.id}</div>
               </div>
             </div>
           ))}
         </div>
         {cards.length > cardsPerPage && (
           <div className="navigation-buttons">
             <button onClick={prevPage} disabled={currentIndex === 0}>
               ◀
             </button>
             <button onClick={nextPage} disabled={currentIndex + cardsPerPage >= cards.length}>
               ▶
             </button>
           </div>
         )}
       </div>
     </div>
    </div>
  );
}
































































// import React, { useState, useEffect } from "react";
// import '../Cards/Cards.css';

// export default function Cards() {
//     const [cards, setCards] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const cardsPerPage = 5; // Set to display 5 cards at a time

//     useEffect(() => {
//         // Fetch data from Cards.json
//         fetch('./Cards.json') // Update with the correct path to your JSON file
//             .then(response => response.json())
//             .then(data => setCards(data))
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     const nextPage = () => {
//         if (currentIndex + cardsPerPage < cards.length) {
//             setCurrentIndex(currentIndex + cardsPerPage);
//         }
//     };

//     const prevPage = () => {
//         if (currentIndex - cardsPerPage >= 0) {
//             setCurrentIndex(currentIndex - cardsPerPage);
//         }
//     };
//     return (
//         <div className="card-section">
//             <div className="card-container">
//                 {cards.slice(currentIndex, currentIndex + cardsPerPage).map(card => (
//                     <div key={card.id} className="card">
//                         <div className="card-image">
//                             <img src={card.photo} alt={card.name} />
//                         </div>
//                         <div className="card-content">
//                             <div>{card.name}</div>
//                             <div>{card.description}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {cards.length > cardsPerPage && (
//                <div className="navigation-buttons">
//                    <button onClick={prevPage} disabled={currentIndex === 0}>
//                       ◀
//                    </button>
//                    <button onClick={nextPage} disabled={currentIndex + cardsPerPage >= cards.length}>
//                       ▶
//                    </button>
//                </div>
//             )}

//         </div>
//     );
// }