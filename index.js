
var btnContainer = document.getElementById("btn-container");
//var timekey;
//var data;

btnContainer.addEventListener('click', function(event) {
   // console.log(event);
   // console.log(event.target);
   // console.log(event.target.className);
   // console.log(typeof event.target);

    // test to see if tetarget element is a BUTTTON
    if(event.target.className == "saveBtn") {
        console.log("Found Button!");
        var timeKey = event.target.previousElementSibling.children[1].value;
        var data = event.target.previousElementSibling.children[1].getAttribute('id');
        // capture the user input data
        console.log(event.target.previousElementSibling)
        // console.log(event.target.previousElementSibling.children[1])
        console.log(event.target.previousElementSibling.children[1].getAttribute('id'))
        console.log(event.target.previousElementSibling.children[1].value)
        var timeKey = event.target.previousElementSibling.children[1].getAttribute('id');
        var data = event.target.previousElementSibling.children[1].value;
       // console.log(event.target.previousElementSibling.lastChild)
       // console.log(event.target.previousElementSibling.lastChild.value)
       localSave(timeKey, data)
    } else {
        console.log("Nope")
    }
})

var save = document.getElementsByClassName("saveBtn");
console.log(save);
//save.addEventListener('click', allSave);

function localSave(key, value)
localStorage.setItem()

function allSave(key, value){

localStorage.setItem(key, value);

localStorage.setItem("6a", document.getElementById(sixAm));
localStorage.setItem("7a", document.getElementById(sevenAm));
localStorage.setItem("8a", document.getElementById(eightAm));
localStorage.setItem("9a", document.getElementById(nineAm));
localStorage.setItem("10a", document.getElementById(tenAM));
localStorage.setItem("11a", document.getElementById(elevenAm));
localStorage.setItem("12p", document.getElementById(twelvePm));
localStorage.setItem("1p", document.getElementById(onePm));
localStorage.setItem("2p", document.getElementById(twoPm));
localStorage.setItem("3p", document.getElementById(threePm));
localStorage.setItem("4p", document.getElementById(fourPm));
localStorage.setItem("5p", document.getElementById(fivePm));
localStorage.setItem("6p", document.getElementById(sixPm));
localStorage.setItem("7p", document.getElementById(sevenPm));
localStorage.setItem("8p", document.getElementById(eightPm));
localStorage.setItem("9p", document.getElementById(ninePm));
localStorage.setItem("10p", document.getElementById(tenPm));
localStorage.setItem("11p", document.getElementById(elevenPm));
localStorage.setItem("12a", document.getElementById(twelveAm));
localStorage.setItem("1a", document.getElementById(oneAm));
localStorage.setItem("2a", document.getElementById(twoAm));
localStorage.setItem("3a", document.getElementById(threeAm));
localStorage.setItem("4a", document.getElementById(fourAm));
localStorage.setItem("5a", document.getElementById(fiveAm));
}
function load() {
document.getElementById(sixAm).innerHTML = localStorage.getItem("6a");
document.getElementById(sevenAm).innerHTML = localStorage.getItem("7a");
document.getElementById(eightAm).innerHTML = localStorage.getItem("8a");
document.getElementById(nineAm).innerHTML = localStorage.getItem("9a");
document.getElementById(tenAM).innerHTML = localStorage.getItem("10a");
document.getElementById(elevenAm).innerHTML = localStorage.getItem("11a");
document.getElementById(twelvePm).innerHTML = localStorage.getItem("12p");
document.getElementById(onePm).innerHTML = localStorage.getItem("1p");
document.getElementById(twoPm).innerHTML = localStorage.getItem("2p");
document.getElementById(threePm).innerHTML = localStorage.getItem("3p");
document.getElementById(fourPm).innerHTML = localStorage.getItem("4p");
document.getElementById(fivePm).innerHTML = localStorage.getItem("5p");
document.getElementById(sixPm).innerHTML = localStorage.getItem("6p");
document.getElementById(sevenPm).innerHTML = localStorage.getItem("7p");
document.getElementById(eightPm).innerHTML = localStorage.getItem("8p");
document.getElementById(ninePm).innerHTML = localStorage.getItem("9p");
document.getElementById(tenPm).innerHTML = localStorage.getItem("10p");
document.getElementById(elevenPm).innerHTML = localStorage.getItem("11p");
document.getElementById(twelveAm).innerHTML = localStorage.getItem("12a");
document.getElementById(oneAm).innerHTML = localStorage.getItem("1a");
document.getElementById(twoAm).innerHTML = localStorage.getItem("2a");
document.getElementById(threeAm).innerHTML = localStorage.getItem("3a");
document.getElementById(fourAm).innerHTML = localStorage.getItem("4a");
document.getElementById(fiveAm).innerHTML = localStorage.getItem("5a");
}