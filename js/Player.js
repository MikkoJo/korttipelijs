class Player{

    constructor(name, numOfCards, gameDeck, money, bet) {

        this.name = name;
        this.numOfCards = numOfCards;
        this.gameDeck = gameDeck;
        this.hand = [];
        this.money = money;
        this.bet = bet;
        console.log(`Pelaaja on luotu: ${name}`);
    }

    showHand(update=false){
        // for(var i = 0; i<this.hand.length; i++) {
        [...player.hand.keys()].forEach(i => {

            console.log(`Kortti kädessä ${i} on: ${this.hand[i]}` + 
            ` - Tekstinä: ${Deck.ConvertCardToText(this.hand[i])}`);
            if (update)
                document.getElementById("card"+i).innerHTML = `<img src="./images/${(this.hand[i]+1)}.png">`;
        })
        // }
    }

    returnHand() {
        this.hand.forEach(card => this.gameDeck.ReturnCard(card));
        this.hand=[];
    }

    changeCards(indexes) {

        // cards arvo on esim. 1,2,4
        console.log("Vaihdettavat kortit ovat: " + indexes.join(','));
        // var nums =  cards.split(',');
        // console.log("Taulukon pituus: " + nums.length);

        let newCards = [];
        indexes.forEach(() => newCards.push(deck.GetCard()));
        indexes.forEach(index => {
            this.gameDeck.ReturnCard(this.hand[index]);
            this.hand[index] = newCards.pop();
            console.log(`Vedettiin kortti ${this.hand[index]} - ${Deck.ConvertCardToText(this.hand[index])}`);
        });
        
        // let i = 0;
        // while(i<nums.length){


        //     var cardValue = deck.GetCard();
        //     console.log("Vedettiin kortti: " + cardValue+ " " + 
        //     Deck.ConvertCardToText(cardValue));

        //     if(deck.takenCards.includes(cardValue) == false){

        //         console.log("Kortti käteen");
        //         this.hand[nums[i]] = cardValue;
        //         deck.takenCards.push(cardValue);
        //         i++;
        //     }else{

        //         console.log("Kortti oli jo vedetty");

        //     }
            // Hetaan yksittäinen satunnainen korttinumero GetCard() metodista
            // Kirjoitetaan logiin mikä kortti juuri vedettiin. Myös tekstinä
            // Tarkastetaan onko kortti jo vedettyjen korttien taulukossa
            // Jos ei ole, laitetaan kortti pelaajan käteen this.hand[nums[i]]
            // Laitetaan koritti myös vedettyjen korttien taulukkon
            // kasvatetaan i++


        // } // while loppuu
        this.showHand(true);
        // this.checkResults();
        // näytetään pelaajan käsi  this.showHand();
        // tarkastetaan tulokset (Tehdään yhdessä)
    } 

    checkResults(){

        let winnings = 0;
        let resultDone = false; 
        console.log("Tarkastetaan tulokset panoksella: " + this.bet);
        // Laitetaan kortit numerojärjestykseen kädessä
        this.hand.sort((a,b) => {return a-b});
        // Käydään läpi hand taulukko
        this.showHand();
        // for(let i = 0; i<this.hand.length; i++){

        //     console.log("Kortti kädessä" + i + "on: " + this.hand[i] + "Tekstinä: " + 
        //     Deck.ConvertCardToText(this.hand[i]));
        // }

        // Tarkastetaan onko kädessä väri
        if(resultDone == false && Deck.GetCardSuit(this.hand[0]) == Deck.GetCardSuit(this.hand[1]) && 
        Deck.GetCardSuit(this.hand[1]) == Deck.GetCardSuit(this.hand[2]) && 
        Deck.GetCardSuit(this.hand[2]) == Deck.GetCardSuit(this.hand[3]) &&
        Deck.GetCardSuit(this.hand[3]) == Deck.GetCardSuit(this.hand[4]))
        {
            console.log("SINULLA ON VÄRI");
            winnings = this.bet * 6;
            resultDone = true; 
        }

        // Tarkastetaan onko kädessä suora
        var straightHand = [];

        this.hand.forEach(card => straightHand.push(Deck.GetCardNumber(card)));
        straightHand.sort((a,b) => {return a-b});
        
        if (resultDone == false && straightHand[0] - straightHand[1] == -1 &&
        straightHand[1] - straightHand[2] == -1 &&
        straightHand[2] - straightHand[3] == -1 &&
        straightHand[3] - straightHand[4] == -1)
        {
            console.log("SINULLA ON SUORA");
            winnings = this.bet * 4;
            resultDone = true; 
        }

        // Tarkastetaan parit, kolmoset ja neloset

        var pairHand = [];

        for(var i = 0; i<this.hand.length; i++){

            pairHand.push(Deck.GetCardNumber(this.hand[i]));
        }
        console.log(pairHand);
        var duplicates = this.findDuplicateInHand(pairHand);
        // duplicate = [4,8]
        console.log(duplicates);
        var count = 0; // paljonko on ensimmäistä lukua 
        var count2 = 0; // paljonko on toista lukua
        for(var i = 0; i < pairHand.length; ++i){
            if(duplicates[0] == pairHand[i] && duplicates.length > 0){
                count++;
            }
            if(duplicates[1] == pairHand[i] && duplicates.length > 1){
                count2++;
            }
        }
        console.log("Toista numeroa on: " + count + " ja toista: " + count2);
        // Tarkastetaan neloset, täyskäsi, kolmoset, kaksi paria ja pari

        if(resultDone == false){
            if(count == 4){
                console.log("Neljä samaa");
                winnings = this.bet * 20;
            }else if(count >= 2 && count2 >= 2){
                if(count == 3 || count2 == 3){
                    console.log("Täyskäsi");
                    winnings = this.bet * 9;
                }else{
                    console.log("Kaksi paria");
                    winnings = this.bet * 3;
                }
            }else if(count == 3 || count2 == 3){
                console.log("Kolme samaa");
                winnings = this.bet * 4;
            }
            else if(count == 2 || count2 == 2){
                    console.log("Pari");
                    winnings = this.bet * 1;
            }else{
                console.log("Ei ole mitään");
                winnings = 0;
            }
        }// resultsDone päättyy
        var currentMoney = this.money;
        this.money += winnings;
        console.log("WINNINGS: " + winnings);
      //  document.getElementById("money").innerHTML = this.money;
        
        var newMoney = Number(currentMoney + winnings);
        console.log("NEWMONEY: " + newMoney);
        var interval = setInterval(function() {
            console.log("RAHAA: " + Number(player.money));
            document.getElementById("money").innerHTML = currentMoney;
            if (currentMoney >= newMoney)
            {
                this.money = currentMoney;
                console.log("RAHATILANNE" + this.money);
                clearInterval(interval);
            }
            currentMoney++;
        }, 30);
        
    }

    findDuplicateInHand(arra1) {
        var object = {};
        var result = [];

        arra1.forEach(function (item) {
          if(!object[item]){
            object[item] = 0;
          }
            object[item] += 1;
     
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }
        return result;
    }


}