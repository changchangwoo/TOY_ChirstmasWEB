class Home {
  template() {
    return `
    <div id="main_text">We Wish a <br />Merry <span id="typing_text"></span></div>
      `;
  }
  typing() {
    const $text = document.querySelector("#typing_text");
    const speed = 100;
    let letter = "";
    const typing = async () => {
      letter = "Christmas";
      letter = [...letter];
      while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
      }
      await wait(1000);

      remove();
    };

    const remove = async () => {
      letter = "Christmas";
      letter = [...letter];

      while (letter.length) {
        await wait(speed);
        letter.pop();
        $text.innerHTML = letter.join("");
      }
      await wait(1500);
      typing();
    };

    function wait(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }

    setTimeout(typing(), 1000);
  }
}
export default new Home();
