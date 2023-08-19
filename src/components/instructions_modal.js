import React from "react";

const reveal = () => {
    document.getElementById("modal").style.display = "block";
}

const hide = () => {
    document.getElementById("modal").style.display = "none";
}


const Instructions = () => {
    return (
        // Modal that displays only when the instructions button is clicked, hides when clicked anywhere. 
        <div id="modal" onClick={hide}>
            <div id="modal_content">
                <span id="close">&times;</span>
                <p>
                    Probably Cards is a tool that helps you keep track of cards.
                    <br></br>
                    It can be used to test probabilities in a made up sceenario to practice or in an actual game. 
                    <br></br>
                    <br></br>
                    <span className="instruction_headers">Description</span>
                    <br></br>
                    In order to count cards you need to keep track or all the cards that you know have been drawn. 
                    Probably Cards accomplishes this by tracking all the cards you've entered. It then displays all 
                    the cards that are still in the deck. The cards in the deck will have a couple numbers next to 
                    the cards themselves which indicates the chance of that card being drawn next. To get full use out of 
                    Probably Cards enter a new card everytime one is drawn
                    <br></br>
                    <br></br>
                    <span className="instruction_headers">Guide</span>
                    <br></br>
                    <span className="bold">Textbox:</span> Add a card to the list in Probably Cards by typing its name into this textbox. You can ONLY add on card at a time. Here's a 
                    list of acceptable names [2D, 3C, 4S, 5h, 6 hearts, 7 Spades, 8 DIAMONDS, 9 clubs, 10D or TS, jh, qS, Kc, AS]
                    <br></br>
                    and an example list of long names [2 of diamonds, 3 of clubs, T of spades or ten of spades, Jack of hearts, Ace of spades].
                    As a rule any number can be added, also any suit can be just one letter, just the name of the suit, or putting the 
                    number then saying that it is of the suit, which is how it is normally said. Example: "Jack of spades." All face cards 
                    can also be abbreviated to one letter, but all of them can be spelled out. Example: "Queen", "king". "ten"?
                    <br></br>
                    <br></br>
                    <span className="bold">Add button:</span> This will add the card you entered in the textbox into the display, you can ONLY add one card at a time. 
                    If you need to un-add a card, then just click the undo button.
                    <br></br>
                    <br></br>
                    <span className="bold">Undo button:</span> This will remove the card you just added. It will remove the most recent cards first.
                    <br></br>
                    <br></br>
                    <span className="bold">Reset button:</span> This will reset the display of cards.

                    <br></br>
                    <br></br>
                    Use in an actual game may constitute cheating.

                </p>
            </div>
        </div>
    )
}

export default Instructions;
export {reveal};