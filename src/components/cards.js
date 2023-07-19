import React from "react";


// class Card {
//     constructor(name, image) {
//       this.name = name;
//       this.image = image;
//     }
//   }
// //   All the short names for cards need to be in the opposite order because variable names
// //   can't start with numbers. So 2H(which is 2 of hearts) is actually named H2.
//   list_of_cards = {H2:"", S2:"", C2:"", D2:"", 
//                     H3:"", S3:"", C3:"", D3:"", 
//                     H4:"", S4:"", C4:"", D4:"", 
//                     H5:"", S5:"", C5:"", D5:"", 
//                     H6:"", S6:"", C6:"", D6:"", 
//                     H7:"", S7:"", C7:"", D7:"", 
//                     H8:"", S8:"", C8:"", D8:"", 
//                     H9:"", S9:"", C9:"", D9:"", 
//                     HT:"", ST:"", CT:"", DT:"", 
//                     HJ:"", SJ:"", CJ:"", DJ:"", 
//                     HQ:"", SQ:"", CQ:"", DQ:"", 
//                     HK:"", SK:"", CK:"", DK:"", 
//                     HA:"", SA:"", CA:"", DA:"", 

// };
//     //   All the short names for cards need to be in the opposite order because variable names
//     //   can't start with numbers. So 2H(which is 2 of hearts) is actually named H2.    
//     card_names = {H2:"2 of hearts", S2:"2 of spades", C2:"2 of clubs", D2:"2 of diamonds", 
//                     H3:"3 of hearts", S3:"3 of spades", C3:"3 of clubs", D3:"3 of diamonds", 
//                     H4:"4 of hearts", S4:"4 of spades", C4:"4 of clubs", D4:"4 of diamonds", 
//                     H5:"5 of hearts", S5:"5 of spades", C5:"5 of clubs", D5:"5 of diamonds", 
//                     H6:"6 of hearts", S6:"6 of spades", C6:"6 of clubs", D6:"6 of diamonds", 
//                     H7:"6 of hearts", S7:"7 of spades", C7:"7 of clubs", D7:"7 of diamonds", 
//                     H8:"8 of hearts", S8:"8 of spades", C8:"8 of clubs", D8:"8 of diamonds", 
//                     H9:"9 of hearts", S9:"9 of spades", C9:"9 of clubs", D9:"9 of diamonds", 
//                     HT:"10 of hearts", ST:"10 of spades", CT:"10 of clubs", DT:"10 of diamonds", 
//                     HJ:"Jack of hearts", SJ:"Jack of spades", CJ:"Jack of clubs", DJ:"Jack of diamonds", 
//                     HQ:"Queen of hearts", SQ:"Queen of spades", CQ:"Queen of clubs", DQ:"Queen of diamonds", 
//                     HK:"King of hearts", SK:"King of spades", CK:"King of clubs", DK:"King of diamonds", 
//                     HA:"Ace of hearts", SA:"Ace of spades", CA:"Ace of clubs", DA:"Ace of diamonds", 

// };

// played_cards = played_list([H3, S6, C8], list_of_cards, 3);


// function played_list (known_cards, card_list, known_number) {
//     played[known_number] = 0;

//     for (let i = 0; i < known_number; index++) {
//         card = new Card(known_cards[i], card_list.knowncards[i]);
//         played[i] = card;
        
//     }
//     return played;
    

// }


const Deck = (list) => {
    // console.log(typeof list)
    
    // let list_arr = Object.values(list); //list.values();
    // console.log(list_arr);
    // let deck_cards = list.map(card => <div>{card.name}<img src={card.image} /></div> );
    let deck_cards = [];
    console.log(list.list);
    for(let i = 0; i < list.list.length; i++) {
        let card = list.list[i];
        deck_cards[i] = <div className="cards"><span>{`${card.name}`}</span><img className="card_images" src={`${card.image}`} />1/51</div>;
    }
    // let test = list_arr[0]
    console.log(deck_cards);
    return (
      <>
        {deck_cards.map(card => <>{card}</>)}
      </>
    )
  };
  

  
const PlayedCards = (list) => {
    // console.log(list)
    // let played_cards_output = list.map(
    //     name, image => <div> {name} <img src={image} /></div>
    // )

    let played_cards = [];
    console.log(list.list);
    for(let i = 0; i < list.list.length; i++) {
        let card = list.list[i];
        played_cards[i] = <div className="cards"><span>{`${card.name}`}</span><img className="card_images" src={`${card.image}`} /></div>;
        // console.log("fewf", card);
    }

    return (
      <>
        {played_cards.map(card => <>{card}</>)}
      </>
    )
  };

const CardDisplay = () => {
    class Card {
        constructor(name, image) {
          this.name = name;
          this.image = image;
        }
      }
    //   All the short names for cards need to be in the opposite order because variable names
    //   can't start with numbers. So 2H(which is 2 of hearts) is actually named H2.
      let list_of_cards = {H2:"/images/hearts_2", S2:"", C2:"fewf", D2:"", 
                        H3:"images/hearts_3.png", S3:"", C3:"", D3:"", 
                        H4:"", S4:"", C4:"", D4:"", 
                        H5:"", S5:"", C5:"", D5:"", 
                        H6:"", S6:"images/spades_6.png", C6:"", D6:"", 
                        H7:"", S7:"", C7:"", D7:"", 
                        H8:"", S8:"", C8:"images/clubs_8.png", D8:"", 
                        H9:"", S9:"", C9:"", D9:"", 
                        HT:"", ST:"", CT:"", DT:"", 
                        HJ:"", SJ:"", CJ:"", DJ:"", 
                        HQ:"", SQ:"", CQ:"", DQ:"", 
                        HK:"", SK:"", CK:"", DK:"", 
                        HA:"", SA:"", CA:"", DA:"images/diamonds_ace.png", 
    
    };

    // let check = "H2";

    // console.log(list_of_cards[check])


    let cards_seen = ["H3", "S6", "C8"];

    // let played_cards = new Card("HA", "inin");

    // let deck_cards = new Card("SA", "nono");
    
    let played_cards = played_list(cards_seen, list_of_cards, cards_seen.length);

    let deck_cards = deck_list(cards_seen, list_of_cards);

    played_cards = assign_names(played_cards);
    deck_cards = assign_names(deck_cards);

    console.log(played_cards)
    
    
    function played_list (known_cards, card_list, known_number) {
        let played = [];
    
        for (let i = 0; i < known_number; i++) {
            let card = new Card(known_cards[i], card_list[known_cards[i]]);
            played[i] = card;
            
        }
        return played;
        
    
    }

        
    function deck_list (known_cards, card_list) {
        let in_deck = [];
        let card_list_arr = Object.entries(card_list);

        let key;
        let value;
    
        for ([key, value] of card_list_arr) {
            let index = 0
            let is_in_deck = true;
            for(let i = 0; i < known_cards.length; i++) {
                if(known_cards[i] === key) {
                    is_in_deck = false
                }
            }
            if(is_in_deck) {
                let card = new Card(key, value);
                in_deck[index] = card;
                index++;
            }
        }
        console.log(in_deck);
        return in_deck;
    }

    function assign_names(list) {
        let new_list = [];
        let list_arr = list.values();
        console.log("1", list);
        console.log("2", list_arr);
        let current_card;
        let index = 0;

        //   All the short names for cards need to be in the opposite order because variable names
        //   can't start with numbers. So 2H(which is 2 of hearts) is actually named H2.    
        let card_names = {H2:"2 of hearts", S2:"2 of spades", C2:"2 of clubs", D2:"2 of diamonds", 
                        H3:"3 of hearts", S3:"3 of spades", C3:"3 of clubs", D3:"3 of diamonds", 
                        H4:"4 of hearts", S4:"4 of spades", C4:"4 of clubs", D4:"4 of diamonds", 
                        H5:"5 of hearts", S5:"5 of spades", C5:"5 of clubs", D5:"5 of diamonds", 
                        H6:"6 of hearts", S6:"6 of spades", C6:"6 of clubs", D6:"6 of diamonds", 
                        H7:"6 of hearts", S7:"7 of spades", C7:"7 of clubs", D7:"7 of diamonds", 
                        H8:"8 of hearts", S8:"8 of spades", C8:"8 of clubs", D8:"8 of diamonds", 
                        H9:"9 of hearts", S9:"9 of spades", C9:"9 of clubs", D9:"9 of diamonds", 
                        HT:"10 of hearts", ST:"10 of spades", CT:"10 of clubs", DT:"10 of diamonds", 
                        HJ:"Jack of hearts", SJ:"Jack of spades", CJ:"Jack of clubs", DJ:"Jack of diamonds", 
                        HQ:"Queen of hearts", SQ:"Queen of spades", CQ:"Queen of clubs", DQ:"Queen of diamonds", 
                        HK:"King of hearts", SK:"King of spades", CK:"King of clubs", DK:"King of diamonds", 
                        HA:"Ace of hearts", SA:"Ace of spades", CA:"Ace of clubs", DA:"Ace of diamonds", 
    
    };
    
        for (current_card of list_arr) {
            let card = new Card(card_names[current_card.name], current_card.image);
            new_list[index] = card;
            index++;

        }
        // console.log(new_list)
        return new_list
    }
        
    

    return (
        <>
            
            <div id="played_cards">
                <h3 className="list_names">Drawn cards</h3>
                <PlayedCards list={played_cards} />
            </div>

            
            <div id="deck">
                <h3 className="list_names">Cards in deck</h3>
                <Deck list={deck_cards} />
            </div>
        </>
    )
}
  
export default CardDisplay;