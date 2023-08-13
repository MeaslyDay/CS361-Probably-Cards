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
    // let deck_cards = [];
    // console.log(list.list);
    // for(let i = 0; i < list.list.length; i++) {
    //     let card = list.list[i];
    //     deck_cards[i] = <div className="cards" key={card.name}>{`${card.name}`}<img className="card_images" src={`${card.image}`} key={card.name} />{`${card.probability}`}</div>;
    // }
    // let test = list_arr[0]
    // console.log(deck_cards);

    
    const deck_cards = list.list.map((card, index) => {
        let line_end = (index % 2 == 0) ? "" : " line_break"

        return <Deck_cards_display key={card.name} name={card.name} image={card.image} probability={card.probability} line_break={line_end} />
    });

    return (
      <>
        {deck_cards}
      </>
    )
  };

function Deck_cards_display(props){
    return <div className={`cards deck_cards${props.line_break}`}>{`${props.name}`}<span className="image_place"><img className="card_images" src={`${props.image}`} />{`${props.probability}`}</span></div>
}
  

  
const PlayedCards = (list) => {
    // console.log(list)
    // let played_cards_output = list.map(
    //     name, image => <div> {name} <img src={image} /></div>
    // )

    // let played_cards = [];

    const played_cards = list.list.map((card) =>
        <Played_cards_display key={card.name} name={card.name} image={card.image} />
    );
    // console.log(list.list);
    // for(let i = 0; i < list.list.length; i++) {
    //     let card = list.list[i];
    //     played_cards[i] = <div className="cards" key={card.name}><span>{`${card.name}`}</span><img className="card_images" src={`${card.image}`} /></div>;
        // console.log("fewf", card);
    // }

    return (
      <>
        {played_cards}
        {/* {played_cards.map(card => <>{card}</>)} */}
      </>
    )
  };

function Played_cards_display(props){
    return <div className="cards">{`${props.name}`}<img className="card_images" src={`${props.image}`} /></div>
}

const CardDisplay = (props) => {
    class Card {
        constructor(name, image) {
          this.name = name;
          this.image = image;
          this.probability = props.probability
        }
    }


    //   All the short names for cards need to be in the opposite order because variable names
    //   can't start with numbers. So 2H(which is 2 of hearts) is actually named H2.
      let list_of_cards = {H2:"/images/hearts_2.png", S2:"images/spades_2.png", C2:"images/clubs_2.png", D2:"images/diamonds_2.png", 
                        H3:"images/hearts_3.png", S3:"images/spades_3.png", C3:"images/clubs_3.png", D3:"images/diamonds_3.png", 
                        H4:"/images/hearts_4.png", S4:"images/spades_4.png", C4:"images/clubs_4.png", D4:"images/diamonds_4.png", 
                        H5:"/images/hearts_5.png", S5:"images/spades_5.png", C5:"images/clubs_5.png", D5:"images/diamonds_5.png", 
                        H6:"/images/hearts_6.png", S6:"images/spades_6.png", C6:"images/clubs_6.png", D6:"images/diamonds_6.png", 
                        H7:"/images/hearts_7.png", S7:"images/spades_7.png", C7:"images/clubs_7.png", D7:"images/diamonds_7.png", 
                        H8:"/images/hearts_8.png", S8:"images/spades_8.png", C8:"images/clubs_8.png", D8:"images/diamonds_8.png", 
                        H9:"/images/hearts_9.png", S9:"images/spades_9.png", C9:"images/clubs_9.png", D9:"images/diamonds_9.png", 
                        HT:"/images/hearts_10.png", ST:"images/spades_10.png", CT:"images/clubs_10.png", DT:"images/diamonds_10.png", 
                        HJ:"/images/hearts_jack.png", SJ:"images/spades_jack.png", CJ:"images/clubs_jack.png", DJ:"images/diamonds_jack.png", 
                        HQ:"/images/hearts_queen.png", SQ:"images/spades_queen.png", CQ:"images/clubs_queen.png", DQ:"images/diamonds_queen.png", 
                        HK:"/images/hearts_king.png", SK:"images/spades_king.png", CK:"images/clubs_king.png", DK:"images/diamonds_king.png", 
                        HA:"/images/hearts_ace.png", SA:"images/spades_ace.png", CA:"images/clubs_ace.png", DA:"images/diamonds_ace.png", 
    
    };

    // let check = "H2";

    // console.log(list_of_cards[check])


    let cards_seen = props.cards;

    
    // let played_cards = new Card("HA", "inin");

    // let deck_cards = new Card("SA", "nono");
    
    let played_cards = played_list(cards_seen, list_of_cards, cards_seen.length);

    let deck_cards = deck_list(cards_seen, list_of_cards);

    played_cards = assign_names(played_cards);
    deck_cards = assign_names(deck_cards);

    // console.log(played_cards)
    
    
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
        let index = 0

        for ([key, value] of card_list_arr) {
            // console.log(key, value)
            let is_in_deck = true;
            for(let i = 0; i < known_cards.length; i++) {
                
                if(known_cards[i] === key) {
                    // console.log(key, " + ", known_cards[i])
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
        // console.log("1", list);
        // console.log("2", list_arr);
        let current_card;
        let index = 0;

        //   All the short names for cards need to be in the opposite order because variable names
        //   can't start with numbers. So 2H(which is 2 of hearts) is actually named H2.    
    //     let card_names = {H2:"2 of hearts", S2:"2 of spades", C2:"2 of clubs", D2:"2 of diamonds", 
    //                     H3:"3 of hearts", S3:"3 of spades", C3:"3 of clubs", D3:"3 of diamonds", 
    //                     H4:"4 of hearts", S4:"4 of spades", C4:"4 of clubs", D4:"4 of diamonds", 
    //                     H5:"5 of hearts", S5:"5 of spades", C5:"5 of clubs", D5:"5 of diamonds", 
    //                     H6:"6 of hearts", S6:"6 of spades", C6:"6 of clubs", D6:"6 of diamonds", 
    //                     H7:"7 of hearts", S7:"7 of spades", C7:"7 of clubs", D7:"7 of diamonds", 
    //                     H8:"8 of hearts", S8:"8 of spades", C8:"8 of clubs", D8:"8 of diamonds", 
    //                     H9:"9 of hearts", S9:"9 of spades", C9:"9 of clubs", D9:"9 of diamonds", 
    //                     HT:"10 of hearts", ST:"10 of spades", CT:"10 of clubs", DT:"10 of diamonds", 
    //                     HJ:"Jack of hearts", SJ:"Jack of spades", CJ:"Jack of clubs", DJ:"Jack of diamonds", 
    //                     HQ:"Queen of hearts", SQ:"Queen of spades", CQ:"Queen of clubs", DQ:"Queen of diamonds", 
    //                     HK:"King of hearts", SK:"King of spades", CK:"King of clubs", DK:"King of diamonds", 
    //                     HA:"Ace of hearts", SA:"Ace of spades", CA:"Ace of clubs", DA:"Ace of diamonds", 
    
    // };
        //text with of removed:
        let card_names = {H2:"2 hearts", S2:"2 spades", C2:"2 clubs", D2:"2 diamonds", 
                        H3:"3 hearts", S3:"3 spades", C3:"3 clubs", D3:"3 diamonds", 
                        H4:"4 hearts", S4:"4 spades", C4:"4 clubs", D4:"4 diamonds", 
                        H5:"5 hearts", S5:"5 spades", C5:"5 clubs", D5:"5 diamonds", 
                        H6:"6 hearts", S6:"6 spades", C6:"6 clubs", D6:"6 diamonds", 
                        H7:"7 hearts", S7:"7 spades", C7:"7 clubs", D7:"7 diamonds", 
                        H8:"8 hearts", S8:"8 spades", C8:"8 clubs", D8:"8 diamonds", 
                        H9:"9 hearts", S9:"9 spades", C9:"9 clubs", D9:"9 diamonds", 
                        HT:"10 hearts", ST:"10 spades", CT:"10 clubs", DT:"10 diamonds", 
                        HJ:"Jack hearts", SJ:"Jack spades", CJ:"Jack clubs", DJ:"Jack diamonds", 
                        HQ:"Queen hearts", SQ:"Queen spades", CQ:"Queen clubs", DQ:"Queen diamonds", 
                        HK:"King hearts", SK:"King spades", CK:"King clubs", DK:"King diamonds", 
                        HA:"Ace hearts", SA:"Ace spades", CA:"Ace clubs", DA:"Ace diamonds", 

        };
    
        for (current_card of list_arr) {
            let card = new Card(card_names[current_card.name], current_card.image);
            new_list[index] = card;
            index++;

        }
        console.log(new_list)
        return new_list
    }
        
    

    return (
        <>
            
            <div id="played_cards">
                <h3 className="list_names">Drawn cards</h3>
                <PlayedCards 
                    list={played_cards} 
                />
            </div>

            
            <div id="deck">
                <h3 className="list_names">Cards in deck</h3>
                <Deck 
                    list={deck_cards} 
                />
            </div>
        </>
    )
}
  
export default CardDisplay;