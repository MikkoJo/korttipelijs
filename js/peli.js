function changeCards() {
    //console.log("dsfdsfs");
    let selected = document.getElementsByClassName("card selected");
    for(let i =  0; i < selected.length; i++) {
        let fileName = selected[i].childNodes[0].src.split("/").pop();
        let index = Number(fileName.split(".").shift());
        let newCard = window.pelaaja.vaihdaKortti(index - 1);
        //console.log(newCard);
        selected[i].childNodes[0].setAttribute("src", `images/${newCard +1}.png`);
        selected[i].classList.remove("selected");
        i--; // remove class removes node from HTMLcollection
        //console.log(index);
    }
    writeKasi(pelaaja.kasi);
    //TODO: calculate winnings
    disableGameUI();

}

function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
 
 }

 function startGame(player) {
    pelaaja.money -= betElem.value;
    moneyElem.innerHTML = pelaaja.money;
            
 }

 function disableGameUI() {

    startElem.disabled = false;
    nameElem.disabled = true;
    minusElem.disabled = false;
    plusElem.disabled = false;
    changeElem.disabled = true;
    cardsElem.classList.add("disabled");

}