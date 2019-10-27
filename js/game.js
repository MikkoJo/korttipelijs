let Game = {
    isColor: function(hand) {
        // Tarkastetaan onko kädessä väri
        colors = hand.map(card => Deck.getCardSuit(card));
        return colors.every(suit => suit == colors[0]);
    },

    isStraight: function(hand) {
        let straightHand = [];
    
        hand.forEach(card => straightHand.push(Deck.getCardNumber(card)));
        straightHand.sort((a,b) => a-b);
        for (let i=1; i<straightHand.length; i++) {
            if (straightHand[i] != straightHand[i-1] + 1) {
                return false
            }
        }
        return true
    },

    countGroups: function(hand) {
        let groups = Array(13).fill(0);
        hand.forEach(card => {
            groups[Deck.getCardNumber(card)-1]++;
        });
        return groups.filter(count => count>0).sort((a,b) => b-a);
    },

    checkResults: function(hand, bet) {
        console.log(`Tarkastetaan tulokset panoksella: ${bet}`);
                
        if (Game.isColor(hand)) {
            console.log("SINULLA ON VÄRI");
            return bet * 6;
        }

        // Tarkastetaan onko kädessä suora
        if (Game.isStraight(hand)) {
            console.log("SINULLA ON SUORA");
            return bet * 4;
        }

        // Tarkastetaan täyskäsi, parit, kasi paria, kolmoset ja neloset
        groupsCount = Game.countGroups(hand);
        switch (groupsCount[0]) {
            case 4: //Neloset
                    console.log("SINULLA ON Neljä samaa");
                    return bet * 20;
                    break;
            case 3: if (groupsCount[1] == 2) {
                        // Täyskäsi
                        console.log("SINULLA ON Täyskäsi");
                        return bet * 9;
                    } else {
                        // Kolmoset
                        console.log("SINULLA ON Kolme samaa");
                        return bet * 4;
                    }
                    break;
            case 2: if (groupsCount[1] == 2) {
                        // Kaksi paria
                        console.log("SINULLA ON Kaksi paria");
                        return bet * 3;
                    } else {
                        // Pari
                        console.log("SINULLA ON Pari");
                        return bet * 1;
                    }
                    break;
            default: // Ei mitään
                     console.log("SINULLA EI OLE mitään! :(");
                     return 0;
        }
    }
}