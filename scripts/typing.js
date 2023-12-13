const $text = document.querySelector("#typing_text")
const speed = 100;
let letter = ''

const typing = async () => {
    letter = "Christmas"
    letter = [...letter]
    while (letter.length) {
        await wait(speed)
        $text.innerHTML += letter.shift()
    }
    await wait(1000);

    remove()
}

const remove = async () => {
    letter = "Christmas"
    letter = [...letter]

    while (letter.length) {
        await wait(speed);
        letter.pop();
        $text.innerHTML = letter.join("");
    }
    await wait(1500);
    typing();

}

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}