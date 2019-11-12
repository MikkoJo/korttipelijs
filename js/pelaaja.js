class Pelaaja {9
    constructor(name = foo, money = START_MONEY) {
        this.name = name;
        this.money = money;
        this.kasi =  [];
    }

    lisaaKortti(kortti) {
        this.kasi.push(kortti);
    }

    lisaaKasi(kortit) {
        this.kasi = [];
        kortit.forEach(k => this.lisaaKortti(k));
    }

    

    vaihdaKortti(id) {
        this.kasi = arrayRemove(this.kasi, id);
        // console.log(this.kasi);
        let newCard = window.pakka.otaKortti();
        this.kasi.push(newCard);
        // console.log(this.kasi);
        return newCard;
        
    }
}