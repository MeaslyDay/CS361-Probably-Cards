import React, {useState} from 'react';

import Card_Display from '../components/cards.js';

function HomePage() {
    // This is state, if known_cards is replaced using update_display the display will use the new known_cards value
    const [known_cards, updateDisplay] = useState([]);

    const [probability, update_odds] = useState(52);
    // Used for testing
    let cards_seen = [];
    for(let i = 0; i < known_cards.length; i++){
        cards_seen.push(known_cards[i]);
    }

    let other_cards = ["H8", "HA", "DJ"];
    let one_deck_odds = probability;

    // Should be replaced with microservice
    function add_button(event) {
        console.log("add API to return the added cards")
        cards_seen.push(`H${known_cards.length + 2}`);
        one_deck_odds -= 1;
        updateDisplay(cards_seen);
        update_odds(one_deck_odds);
        event.preventDefault()
    }

     // Should be replaced with microservice
    function undo_button(event) {
        console.log(known_cards.length);
        if(known_cards.length > 0){
            console.log("add API to undo the last add action and return cards");
            cards_seen.pop();
            one_deck_odds += 1;
            updateDisplay(cards_seen);
            update_odds(one_deck_odds);
        }
        event.preventDefault()
    }

     // Should be replaced with microservice
    function reset_button() {
        console.log("add API to reset all cards and return cards");
        one_deck_odds = 52;
        updateDisplay([]);
        update_odds(one_deck_odds)
    }


    return (
        <article className="App-article">
            <div>
                <p className="instructions">
                    Find the probability of drawing a card by entering each card you 
                    know is outside of the deck using the text box!
                </p>
                <button className="instructions">Click here for instructions</button>
            </div>

            <div>

                <div id="card_form">
                    <form>
                        <input type="text" placeholder="Add card" />
                        <input id="add_button" type="submit" value="Add" onClick={add_button} />
                        <input id="undo_button" type="submit" value="Undo" onClick={undo_button} />
                    </form>
                </div>
                <div>
                    <button id="reset_button" onClick={reset_button}>Reset</button>
                </div>
 
            </div>
                
            <div id="whole_deck">
                <Card_Display 
                    cards={known_cards}
                    probability={`1/${probability}`}
                />
            </div>

        </article>
    );
}

export default HomePage;