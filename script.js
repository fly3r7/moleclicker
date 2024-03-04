let feld1 = document.querySelector("#l11");
let feld2 = document.querySelector("#l12");
let feld3 = document.querySelector("#l13");
let feld4 = document.querySelector("#l21");
let feld5 = document.querySelector("#l22");
let feld6 = document.querySelector("#l23");
let feld7 = document.querySelector("#l31");
let feld8 = document.querySelector("#l32");
let feld9 = document.querySelector("#l33");
let feld10 = document.querySelector("#l14");
let feld11 = document.querySelector("#l24");
let feld12 = document.querySelector("#l34");
let container = document.querySelector("#container");
let anzeige = document.querySelector("p");
let scorebord = document.querySelector("#score");
let startbtn = document.querySelector("#start");
let score = 0;
let feldarray = [feld1, feld2, feld3, feld4, feld5, feld6, feld7, feld8, feld9, feld10, feld11, feld12];
let timer = 45000;
let inputfield = document.getElementById("inputfield");
let inputbtn = document.getElementById("inputbtn");
let liste;
let hiddeninput = document.querySelector(".inputcontainer");

feld1.addEventListener("click", f1);
feld2.addEventListener("click", f2);
feld3.addEventListener("click", f3);
feld4.addEventListener("click", f4);
feld5.addEventListener("click", f5);
feld6.addEventListener("click", f6);
feld7.addEventListener("click", f7);
feld8.addEventListener("click", f8);
feld9.addEventListener("click", f9);
feld10.addEventListener("click", f10);
feld11.addEventListener("click", f11);
feld12.addEventListener("click", f12);
startbtn.addEventListener("click", start);

function start() {
    if (timer === 0) {
        location.reload();
    }
    if (timer < 45000) {
        return;
    }
    showlist();
    createmule();
    setTimeout(time, timer);
    setInterval(showtime, 1000);
}
function showtime() {
    if (timer === 45000) {
        timer -= 1000;
    }
    if (timer === 0) {
        return;
    }
    timer -= 1000;
    anzeige.innerText = timer / 1000;
}
function time() {
    alert("game over" + " " + score);
    if (score > 30) {
        hiddeninput.style.display = "block";
    }
}

function rand() {
    return Math.floor(Math.random() * (11 - 0 + 1)) + 0;
}
function createmule() {
    let picture = document.createElement("img");
    picture.setAttribute("src", "mole.png");
    feldarray[rand()].appendChild(picture);
}
function f1() {
    if (feld1.firstChild === null) {
        return;
    }
    if (feld1.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld1.removeChild(feld1.firstChild);
    }
    createmule();
}
function f2() {
    if (feld2.firstChild === null) {
        return;
    }
    if (feld2.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld2.removeChild(feld2.firstChild);
    }
    createmule();
}
function f3() {
    if (feld3.firstChild === null) {
        return;
    }
    if (feld3.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld3.removeChild(feld3.firstChild);
    }
    createmule();
}
function f4() {
    if (feld4.firstChild === null) {
        return;
    }
    if (feld4.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld4.removeChild(feld4.firstChild);
    }
    createmule();
}
function f5() {
    if (feld5.firstChild === null) {
        return;
    }
    if (feld5.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld5.removeChild(feld5.firstChild);
    }
    createmule();
}
function f6() {
    if (feld6.firstChild === null) {
        return;
    }
    if (feld6.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld6.removeChild(feld6.firstChild);
    }
    createmule();
}
function f7() {
    if (feld7.firstChild === null) {
        return;
    }
    if (feld7.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld7.removeChild(feld7.firstChild);
    }
    createmule();
}
function f8() {
    if (feld8.firstChild === null) {
        return;
    }
    if (feld8.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld8.removeChild(feld8.firstChild);
    }
    createmule();
}
function f9() {
    if (feld9.firstChild === null) {
        return;
    }
    if (feld9.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld9.removeChild(feld9.firstChild);
    }
    createmule();
}
function f10() {
    if (feld10.firstChild === null) {
        return;
    }
    if (feld10.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld10.removeChild(feld10.firstChild);
    }
    createmule();
}
function f11() {
    if (feld11.firstChild === null) {
        return;
    }
    if (feld11.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld11.removeChild(feld11.firstChild);
    }
    createmule();
}
function f12() {
    if (feld12.firstChild === null) {
        return;
    }
    if (feld12.childElementCount >= 1) {
        score++;
        scorebord.innerHTML = "score:" + score;
        feld12.removeChild(feld12.firstChild);
    }
    createmule();
}

function inputlist() {
    if (inputfield.value === "") {
        alert("enter your name!")
        return;
    }
    savelist();
    inputfield.value = "";
    if (liste.length > 5) {
        let a = liste.sort();
        a.reverse();
        a.splice(a.length - 1, 1);
        localStorage.setItem('MuleClicker', JSON.stringify(liste));
        return;
    }

}
inputbtn.onclick = function () {
    inputlist();
    hiddeninput.style.display = "none";
}
function savelist() {
    if (inputfield.value.trim() != 0) {
        let localItems2 = JSON.parse(localStorage.getItem('MuleClicker'));
        if (localItems2 === null) {
            liste = [];
        } else {
            liste = localItems2;
        }
        liste.push(score + ":" + inputfield.value);
        localStorage.setItem('MuleClicker', JSON.stringify(liste));
    }
}
function showlist() {
    let localItems2 = JSON.parse(localStorage.getItem('MuleClicker'));

    if (localItems2 === null) {
        liste = [];
    } else {
        liste = localItems2;
    }
}