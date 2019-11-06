class Pelaaja {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.kasi =  [];
    }

    lisaaKortti(kortti) {
        this.kasi.push(kortti);
    }

    lisaaKasi(kortit) {
        kortit.forEach(k => this.lisaaKortti(k));
    }
}