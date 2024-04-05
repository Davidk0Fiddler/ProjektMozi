// Feltöltés

const leftSeats = document.getElementById('left-seats');
const middleSeats = document.getElementById('middle-seats');
const rightSeats = document.getElementById('right-seats');
const vipSeats = document.getElementById('vip-seats');
const szektartozek = document.getElementById('szektartozek');
const szekAr = document.getElementById('szekar');
const foglalasBtn = document.getElementById('foglalasbtn')
foglalasBtn.style.display = 'none';

let choosedseat

let seatnum = 1;
let prenum = 0;
let seatid = 0;
for(let i = 0; i < 20;){
    if (i < 5 && prenum > 0){
	leftSeats.innerHTML += `<div class="seat" id="${seatid}" onclick="selectfun(${seatid})">${prenum}${seatnum}</div>`
    }
    else if (i > 4 && i < 15 && prenum > 0){
	middleSeats.innerHTML += `<div class="seat" id="${seatid}" onclick="selectfun(${seatid})">${prenum}${seatnum}</div>`
    }
    else if (i >= 15 && prenum > 0){
	rightSeats.innerHTML += `<div class="seat" id="${seatid}" onclick="selectfun(${seatid})">${prenum}${seatnum}</div>`
    }

    if (i < 5 && prenum == 0 ){
        leftSeats.innerHTML += `<div class="seat" id="${seatid}" onclick="selectfun(${seatid})" style="margin-top: 2%;">${prenum}${seatnum}</div>`
    }
    else if (i > 4 && i < 15 && prenum == 0){
         middleSeats.innerHTML += `<div class="seat" id="${seatid}" onclick="selectfun(${seatid})" style="margin-top: 1%;">${prenum}${seatnum}</div>`
    }
    else if (i >= 15 && prenum == 0){
        rightSeats.innerHTML += `<div class="seat" id="${seatid}" onclick="selectfun(${seatid})" style="margin-top: 2%;">${prenum}${seatnum}</div>`
    }
    seatnum++;
    seatid++;
    i++;
    if(i == 20 && prenum != 4) {
        prenum++;
        i = 0;
        seatnum = 1;
    }
}
prenum++
seatnum = 1;
for (let i = 0; i < 10; i++) {
    vipSeats.innerHTML += `<div class="seat" id="${seatid}" onclick="selectfun(${seatid})" style="margin-top: 1%;">${prenum}${seatnum}</div>`
    seatnum++;
    seatid++;
}

function selectfun(seatid) {
    roomobj.then((response) => {
       if(response.moziterem[seatid].szekar != 5000){
        szekAr.innerHTML = `<h2> Tartozékok </h2> <br> <ul> <li> Pohártartó </li>`
       }
       else {
        szekAr.innerHTML = ``
       }
       foglalasBtn.style.display = 'block'
       choosedseat = seatid;
    })
}

let roomobj = fetch('roomsource.json').then(function(response) {
    return response.json();
}).catch((error) => {
    console.log(error)
});

function call() {
roomobj.then((response) => {
    response.moziterem[0].foglalt = true
    response.moziterem[1].foglalt = true
    response.moziterem[2].foglalt = true
    for(let i = 0; i < response.moziterem.length; i++){
        if (response.moziterem[i].foglalt == true) {
            document.getElementById(`${i}`).style.backgroundColor = "rgb(255,0,0)"
            document.getElementById(`${i}`).classList.add("foglalt");
        }
    }
})}

call()

function foglalas(seatid){
roomobj.then((response) => {
    document.getElementById(seatid).classList.add("foglalt");
    call();    
})}



// console.log(roomobj);
