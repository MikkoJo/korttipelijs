class Player {
    constructor(name, money, bet) {
        this.name = name;
        this.hand = [];
        this.money = money;
        this.bet = bet;
        writeLog(`Pelaaja on luotu: ${name}`);
    }

    showHand(){
        player.hand.forEach((card,index) => {
            writeLog(`Kortti kädessä ${index} on: ${card} - ${Deck.convertCardToText(card)}`);
        })
    }

    returnHand() {
        // Tyhentää pelaajan käsi
        let oldCards = this.hand;
        this.hand=[];
        return oldCards;
    }

    addCards(cards) {
        // Lisää korttia pelaajalle
        cards.forEach((card) => {
            return this.hand.push(card);
        });
        this.showHand();
    }

    changeCards(indexes, newCards) {
        // Funktio vaihtaa korttia sijainin mukaan.
        // Kirjoitetaan logiin mikä kortti juuri vedettiin. Myös tekstinä
        // newCards arvo on taulukko, esim. [12,28,45]
        // Funktio palauttaa taulukkona, niitä korttia, jota poistetaan
        writeLog("Vaihdettavat kortipaikat ovat: " + indexes.join(','));

        let oldCards = [];
        indexes.forEach(index => {
            oldCards.push(this.hand[index]);
            this.hand[index] = newCards.pop();
            writeLog(`Vedettiin kortti ${this.hand[index]} - ${Deck.convertCardToText(this.hand[index])}`);
        });
        this.showHand();
        return oldCards;
    }
}