class Deck {
    static get SUITS() { return ['Pata','Ruutu','Risti','Hertta']; }

    constructor() {
        this.deckCards = [...Array(52).keys()]; // [0..51]
        console.log("Pakka luotu");

    }

    deal(amount) {
        // Ota deckCards taulukosta satunnaisesti kortteja amount arvon verran.
        // Kerro konsolissa mikä kortti vedettiin

        let hand = []
        for (let i = 0; i < amount; i++) {
            hand.push(this.getCard());
        }
        console.log(`Jaetaan ${amount} korttia pelaajalle: ${hand}`);
        return hand;
    }

    getCard() {
        // getCard palauttaa satunnaisen luvun Deckin arvoista. 
        return this.deckCards.splice(Math.floor(this.deckCards.length * Math.random()),1)[0];
    }

    returnCard(card) {
        // Palauttaa kortti taulukkoon.
        this.deckCards.push(card);
    }

    returnCards(cards) {
        // Palauttaa korttia taulukkoon.
        cards.forEach(card => this.deckCards.push(card));
    }

    static getCardSuit(card) {
        // Funktio palauttaa kortin 'suit' merkkijonona.
        return Deck.SUITS[Math.floor(card/13)];
    }

    static getCardNumber(card) {
        // Funktio palauttaa kortin numeron arvon.
        return (card % 13) + 1;
    }

    static convertCardToText(card) {
        // Funktio palauttaa kortin 'suit' ja arvo tekstinä.
        return `${Deck.getCardSuit(card)} ${Deck.getCardNumber(card)}`;
    }


}