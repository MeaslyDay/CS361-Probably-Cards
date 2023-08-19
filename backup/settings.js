import React from 'react';


function SettingsPage() {
    return (
        <article className="App-article">
                <div className="inline_settings">
                    <div>
                        <div className="settings_headers">Deck</div>
                        <figure>
                            <img src="images/backs_5.png" id="deck_back" />
                            <figcaption>Deck style</figcaption>
                        </figure>
                    </div>
                    <div className="slider_containers">
                        <div>
                        Change the tone of your cards
                        </div>
                        <div>
                            Light<input type="range" min="1" max="100" value="1" className="slider" />Dark
                        </div>
                        <div>
                            Clear<input type="range" min="1" max="100" value="1" className="slider" />Yellow
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="size_adjust">
                        <h2 className="settings_headers">Info</h2>
                        <p>
                            Probably Cards allows you to visually see how people count cards. 
                            Probably Cards keeps track of the which cards have been drawn and 
                            displays a list of both the revealed cards and the cards still in 
                            the deck. It is a great tool for understanding how probabilities 
                            work and for seeing your cards in a new light.
                            
                        </p>
                    </div>
                    <br className="settings_headers"></br>
                </div>
        </article>
        
    );
}

export default SettingsPage;