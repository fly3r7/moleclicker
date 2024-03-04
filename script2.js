
let clearbtn = document.getElementById("clearbtn");
let list = document.getElementById("list");
let liste = [];

function inputlist() {
    if (inputfield.value === "") {
        alert("enter your name!")
        return;
    }
    if (list.childElementCount === 5) {
        return;
    }
    let listP = document.createElement("p");
    list.appendChild(listP);
    list.lastChild.innerText = inputfield.value;
    savelist();
    inputfield.value = "";
}

clearbtn.onclick = function () {
    if (list.childElementCount === 0) {
        return;
    }
    list.removeChild(list.lastChild);
    clearlist();
}
function savelist() {
    if (inputfield.value.trim() != 0) {
        let localItems2 = JSON.parse(localStorage.getItem('MuleClicker'));
        if (localItems2 === null) {
            liste = [];
        } else {
            liste = localItems2;
        }
        liste.push(inputfield.value);
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
    for (let i = 0; i < liste.length; i++) {
        let listP = document.createElement("p");
        let sorted = liste.sort();
        sorted.reverse();
        list.appendChild(listP);
        list.lastChild.innerText = liste[i];
    }

}
showlist();
function clearlist() {
    liste.splice(liste.length - 1, 1);
    localStorage.setItem('MuleClicker', JSON.stringify(liste));
}
