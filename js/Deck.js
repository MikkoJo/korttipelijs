class Deck {

    static get SUITS() { return ['Pata','Ruutu','Risti','Hertta']; }

    constructor() {

        this.deckCards = [...Array(52).keys()]; // [0..51]
        // this.takenCards = [];
        console.log("Pakka luotu");

    }

    Deal(amount, player) {

        console.log(`Jaetaan ${amount} korttia pelaajalle ${player.name}`);
        // Ota deckCards taulukosta satunnaisesti kortteja amount arvon verran.
        // Tarkasta onko jo otettu kortti takenCard taulukossa.
        // Jos on, ota uusi satunnainen kortti. 
        // Jos ei, laita kortti player objektin hand[] taulukkomuuttujaan
        // Ja lisää vedetty kortti takenCard taulukkoon. 
        // Kerro konsolissa mikä kortti vedettiin

        for (let i = 0; i < amount; i++) {

            player.hand[i] = this.GetCard();
            
            // if(this.takenCards.includes(cardValue))
            // {
            //     console.log(`Kortti ${cardValue} oli jo vedetty. Arvotaan kortti uudestaan`);
            // } else {
            //     console.log(`Kortti, jonka sait käteen on: ${cardValue}`);
            //     player.hand[i] = cardValue;
            //     this.takenCards.push(cardValue);
            //     i++;
            // }
        }
        // Halutaan näyttää pelaajan käsi hand[]
        player.showHand(true);
    }

    GetCard() {

        // GetCard palauttaa satunnaisen luvun Deckin arvoista. 
        return this.deckCards.splice(Math.floor(this.deckCards.length * Math.random()),1)[0];
    }

    ReturnCard(card) {
        this.deckCards.push(card);
    }

    static GetCardSuit(card){
        return Deck.SUITS[Math.floor(card/13)];
        // var suit;
        // if(card <= 12){
        //     suit = "Pata";     
        // }else if(card <= 25){
        //     suit = "Ruutu";
        // }else if(card <= 38){
        //     suit = "Risti";
        // }else{
        //     suit = "Hertta";
        // }
        // return suit;
    }

    static GetCardNumber(card) {
        return (card % 13) + 1;
        // var number; 

        // if(card <= 12){
        //     number = card + 1;
        // }else if(card <= 25){
        //     number = card - 12;
        // }else if(card <= 38){
        //     number = card - 25;
        // }else{
        //     number = card - 38;
        // }
        // return Number(number);
    }


    static ConvertCardToText(card) {

        // let suit = this.SUITS[Math.floor(card/13)];
        // let number = (card % 13) + 1;
        return `${Deck.GetCardSuit(card)} ${Deck.GetCardNumber(card)}`;

        // if (card <= 12) {
        //     suit = "Pata";
        //     number = card + 1;
        // } else if (card <= 25) {
        //     suit = "Ruutu";
        //     number = card - 12;

        // } else if (card <= 38) {
        //     suit = "Risti";
        //     number = card - 25;
        // } else {
        //     suit = "Hertta";
        //     number = card - 38;
        // }
    }


}