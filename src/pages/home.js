import React, { useState as use_state, useEffect as use_effect } from 'react';

import Card_Display from '../components/cards.js';

import Modal, {reveal as show_instuctions} from '../components/instructions_modal.js';

function HomePage() {
    // This is state, if known_cards is replaced using update_display the display will use the new known_cards value
    const [known_cards, update_display] = use_state([]);

    const [probability, update_odds] = use_state(52);
    const [message, set_message] = use_state('');
    const [websocket, set_websocket] = use_state(null);


    // Validates the form input so that only approved card names are accepted.
    // Used in the validate function, but expanded upon in the format_card_name function.
    let text_validator = new RegExp(
      '/([23456789TJQKA])([CDHS])|\
      (([23456789]( of hearts| hearts)|( of clubs| clubs)|( of diamonds| diamonds)|( of spades| spades))|\
      ((Ten|10)( of hearts| hearts)|( of clubs| clubs)|( of diamonds| diamonds)|( of spades| spades))|\
      (jack( of hearts| hearts)|( of clubs| clubs)|( of diamonds| diamonds)|( of spades| spades))|\
      (Queen( of hearts| hearts)|( of clubs| clubs)|( of diamonds| diamonds)|( of spades| spades))|\
      (King( of hearts| hearts)|( of clubs| clubs)|( of diamonds| diamonds)|( of spades| spades))|\
      (Ace( of hearts| hearts)|( of clubs| clubs)|( of diamonds| diamonds)|( of spades| spades)))/gmi'
    )

    let one_deck_odds = probability;
    
    let cards_seen = [];
    
    use_effect(() => {
        const ws = new WebSocket('ws://localhost:8080');
    
        ws.onopen = () => {
            console.log('WebSocket connected');
            set_websocket(ws);
        };
    
        ws.onmessage = (event) => {
            display_cards(event);
        };
    
        ws.onclose = () => {
            console.log('WebSocket disconnected');
            set_websocket(null);
        };
    
        return () => {
            if (websocket) {
                websocket.close();
            }
        };
    }, []);
  
    const send_message = (message) => {
        if (websocket && websocket.readyState === WebSocket.OPEN) {
            websocket.send(message);
        }
    };
  
    const handle_input_change = (event) => {
        set_message(event.target.value);
    };
  
    const handle_submit = (event) => {
        event.preventDefault();
        if(validate(message)){
            set_message(format_card_name(message))
            document.getElementById('input_card').value = "";
            send_message(format_card_name(message));
            set_message('');
        }
        else{
            alert(message, " is not a valid card. Try these: jack spades, jack of clubs, or simply shorthand; 2D, TS")
        }
    };
  



    

    const validate = (card_name) => {
        if(text_validator.test(card_name)){
            return false;
        }
        else{
            return true;
        }
    }

    const card_types = ["ten", "jack", "queen", "king", "ace"];
    const abbreviated_card_types = ["T", "J", "Q", "K", "A"];

    const format_card_name = (card_name) => {
        let temp_name = ""
        // if name contains a full name: the full name hearts is often abbreviated in test to h.
        if(card_name.length > 6){
            for(let i = 0; i <= card_name.length; i++){
                // Check name for any unique letters in the names of the suits for playing cards.
                // h is unique to hearts, m is unique to diamonds, c is unique to clubs, and
                // p is unique to spades. Most other letters, like e, occure in two or more suits.
                if(card_name.slice(i, i+1).toLowerCase() === "h"){
                    temp_name += "H";
                    break;
                }
                if(card_name.slice(i, i+1).toLowerCase() === "m"){
                    temp_name += "D";
                    break;
                }
                if(card_name.slice(i, i+1).toLowerCase() === "c"){
                    temp_name += "C";
                    break;
                }
                if(card_name.slice(i, i+1).toLowerCase() === "p"){
                    temp_name += "S";
                    break;
                }
            }
        }
        // card_name has a shorthand value for the suit.
        // shorthand: h, d, c, s.
        // full names: hearts, diamonds, clubs, spades.
        else{
            for(let i = 0; i <= card_name.length; i++){
                // Check name for the first letter in the names of the suit this playing cards.
                // h is hearts, d is diamonds, c is clubs, and s is spades.
                if(card_name.slice(i, i+1).toLowerCase() === "h"){
                    temp_name += "H";
                    break;
                }
                if(card_name.slice(i, i+1).toLowerCase() === "d"){
                    temp_name += "D";
                    break;
                }
                if(card_name.slice(i, i+1).toLowerCase() === "c"){
                    temp_name += "C";
                    break;
                }
                if(card_name.slice(i, i+1).toLowerCase() === "s"){
                    temp_name += "S";
                    break;
                }
            }
        }

        // We check for what number or face card it is after so that it is in the right 
        // format for cards.js.
        for(let i = 0; i < card_types.length; i++){
            if(card_name.slice(0, card_types[i].length).toLowerCase() === card_types[i]){
                temp_name += abbreviated_card_types[i];
            }
        }
        if(temp_name.length === 1){
            if(card_name.slice(0, 2) === "10"){
                temp_name += "T";
            }
            else{
                temp_name += card_name.slice(0, 1).toUpperCase();
            }
        }

        return temp_name;
    }


    function display_cards(event) {
        console.log(cards_seen, " ", known_cards);
        // Assuming received data is a plain string of card values
        const received_message = event.data; 
        // Split the string into an array of card values
        const new_cards = received_message.split(','); 

        if(cards_seen.length < new_cards.length){
            one_deck_odds -= 1;
        } else {
            one_deck_odds += 1;
        }

        cards_seen = [];

        // Update the cards_seen array
        if(new_cards[0] === ''){
            cards_seen = [];
            one_deck_odds = 52
            update_display(cards_seen);
            update_odds(one_deck_odds);
        }
        else if(Array.isArray(new_cards)){
            cards_seen.push(...new_cards);
            
            update_display(cards_seen);
            update_odds(one_deck_odds);
        }
        
        
        
        event.preventDefault()
    }


    function undo_button(event) {
        if(known_cards.length > 0){
            cards_seen.pop();

            const message = `UNDO`;
            websocket.send(message);
            
        }
        event.preventDefault()
    }


    function reset_button() {
        const message = `RESET`;
        // All reset state variables are handled in the add_cards function.
        websocket.send(message);

    }


    return (
        <article className="App-article">
            <div>
                <p className="instructions">
                    Find the probability of drawing a card by entering each card you 
                    know is outside of the deck using the text box!
                </p>
                <button className="instructions" onClick={show_instuctions}>Click here for instructions</button>
            </div>

            <div>

                <div id="card_form">
                    Try typing 4h or queen of spades
                    <form onSubmit={handle_submit}>
                        <input 
                            id="input_card"
                            type="text"
                            // value={message}
                            onChange={handle_input_change}
                            placeholder="Add a card"
                        />
                        <button type="submit" >Add Card</button>
                        <input id="undo_button" type="button" value="Undo" onClick={undo_button} />
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

            <Modal />

        </article>
    );
}

export default HomePage;