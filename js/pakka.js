class Pakka {
    constructor() {
        this.pakka = [];
        for (let i = 0; i <= 51; i++) {
            this.pakka.push(i);
        }
        this.sekoita();
    }

    static getMaa(kortti) {
        const Maat = ['Pata', 'Ruutu', 'Risti', 'Hertta'];
        return Maat[Math.floor(kortti / 13)];
    }

    static getNumero(kortti) {
        return (kortti % 13) + 1;
    }

    sekoita() {
        for (let i = this.pakka.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements this.pakka[i] and this.pakka[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = this.pakka[i]; this.pakka[i] = this.pakka[j]; this.pakka[j] = t
            [this.pakka[i], this.pakka[j]] = [this.pakka[j], this.pakka[i]];
        }
    }

    otaKortti() {
        return this.pakka.pop();
    }

    jaaKasi(maara) {
        let kasi = [];
        for(let i = 0; i < maara; i++) {
            kasi.push(this.otaKortti());
        }
        return kasi;
    }
}
