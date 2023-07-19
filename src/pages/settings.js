import React from 'react';


function SettingsPage() {
    return (
        <article className="App-article">
            <div>
                <h2 className="settings_headers">Deck</h2>
                <figure className="inline_settings">
                    <img src="images/blue2.png" id="deck_back" />
                    <figcaption>Deck style</figcaption>
                </figure>
                <div className="inline_settings">
                    <div>
                    Change the tone of your cards
                    </div>
                    <div className="slidecontainer">
                        Light<input type="range" min="1" max="100" value="1" className="slider" />Dark
                    </div>
                    <div className="slidecontainer">
                        Clear<input type="range" min="1" max="100" value="1" className="slider" />Yellow
                    </div>
                </div>
            </div>
            <div className="end_float">
                <h2 className="settings_headers">Info</h2>
                <p>
                    THis will contain info about the process and how it is based in statics.
                </p>
            </div>
        </article>
    );
}

export default SettingsPage;