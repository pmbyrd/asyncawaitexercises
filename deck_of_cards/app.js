console.log('deck_of_cards/app.js')
//create a new deck

//NOTE use async await
// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
async function getCard() {
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    console.log(res.data.cards[0].value, "of", res.data.cards[0].suit)
}
getCard()


// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.
async function getTwoCards() {
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
    console.log(res.data.cards[0].value, "of", res.data.cards[0].suit)
    console.log(res.data.cards[1].value, "of", res.data.cards[1].suit)
}
getTwoCards()

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

async function drawCard() {
    $(".cards").prepend(`<button class="btn btn-primary">Draw a Card</button>`)
   $(".btn").on("click", async function () {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        console.log(res.data.cards[0].value, "of", res.data.cards[0].suit)
        if (res.data.remaining === 0) {
            $(".btn").remove();
        }
        else {
            $(".deck-of-cards").append(`<img src="${res.data.cards[0].image}">`);
        }
    });
}

drawCard()
