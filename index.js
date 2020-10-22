// JavaScript source code

let dashArray = [];
let gridArray = [];
let emojis = ['🙃', '😀', '😂', '😁', '😄', '🤑', '😜'];


function dashes() {
  //  document.getElementById("body").style = "overflow: hidden";

    for (let i = 0; i < 171; i++) {

        gridArray[i] = document.createElement('div');
        gridArray[i].classList = 'grid-div';
        document.getElementById("grid").appendChild(gridArray[i]);

        dashArray[i] = document.createElement('p');
        dashArray[i].classList = 'text';
        dashArray[i].innerHTML = '~';
        gridArray[i].appendChild(dashArray[i]);

       gridArray[i].addEventListener("mouseover", function () {
           let random = Math.floor(Math.random() * emojis.length);
           let emoji = emojis[random];
           dashArray[i].innerHTML = emoji;
        });
    }
}
