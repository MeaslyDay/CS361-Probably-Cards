import React from 'react';

import Card_Display from '../components/cards.js';

function HomePage() {
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
                        <input type="submit" value="Add" />
                        <input type="submit" value="Undo" />
                    </form>
                </div>
                <div>
                    <button id="reset_button">Reset</button>
                </div>
 
            </div>
                
            <div id="whole_deck">
                <Card_Display />
            </div>

        </article>
    );
}

export default HomePage;