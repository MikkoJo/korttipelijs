class Player {

    constructor(name, money, bet) {

        this.name = name;
        this.hand = [];
        this.money = money;
        this.bet = bet;
        console.log(`Pelaaja on luotu: ${name}`);
    }

    showHand(){
        [...player.hand].forEach((card,i) => {
            console.log(`Kortti kädessä ${i} on: ${card}` + 
            ` - : ${Deck.convertCardToText(card)}`);
        })
    }

    returnHand() {
        let oldCards = this.hand;
        this.hand=[];
        return oldCards;
    }

    addCards(cards) {
        cards.forEach((card) => {
            return this.hand.push(card);
        });
    }

    changeCards(indexes, newCards) {
        // Funktio vaihtaa korttia sijainin mukaan.
        // Kirjoitetaan logiin mikä kortti juuri vedettiin. Myös tekstinä
        // cards arvo on esim. 1,2,4
        console.log("Vaihdettavat kortipaikat ovat: " + indexes.join(','));

        let oldCards = [];
        indexes.forEach(index => {
            oldCards.push(this.hand[index]);
            this.hand[index] = newCards.pop();
            console.log(`Vedettiin kortti ${this.hand[index]} - ${Deck.convertCardToText(this.hand[index])}`);
        });
        return oldCards;
    } 



}