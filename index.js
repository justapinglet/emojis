// JavaScript source code

let emojis = ['🙃', '😀', '😂', '😁', '😄', '🤑', '😜'];

function tilde() {

    for (let i = 0; i < 171; i++) {

        let div = document.createElement('div');
        div.classList = 'grid-div';
        div.innerHTML = '~';
        document.getElementById("grid").appendChild(div);

        div.addEventListener("mouseover", function () {
            let random = Math.floor(Math.random() * emojis.length);
            let emoji = emojis[random];
            div.innerHTML = emoji;
        });
    }
}
