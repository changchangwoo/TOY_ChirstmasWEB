class Scene2 {
  template() {
    return `
      <div id="main_text">SantaClus is <br> <span id="text_slide"></span></div>
    `;
  }

  text_slide() {
    const $text_slide = document.getElementById('text_slide');
    const context = ' Coming to Town';
    const textArray = context.split('');
    const tagName = 'span';
    let interval;
    let timer = 50;
    let index = 0;
    let flag = 0;

    const createNode = (tagname) => {
      const tag = document.createElement(tagname);
      return tag;
    };

    const insertLetters = () => {
      textArray.forEach((letter) => {
        const textNode = createNode(tagName);
        if (letter === ' ') {
          textNode.textContent = '\xa0';
        } else if (letter === '\n') {
          const br = createNode('br');
          $text_slide.appendChild(br);
        } else {
          textNode.textContent = letter;
        }
        $text_slide.appendChild(textNode);
      });
    };

    const addClass = () => {
      let letters = Array.from($text_slide.querySelectorAll(tagName));
      letters[index].classList.add('text-animated');
      index++;
      if (letters.length === index) {
        clearInterval(interval);
        setTimeout(() => {
          removeClass(letters);
        }, 4000);
      }
    };

    const removeClass = (letters) => {
      letters.forEach((element, i) => {
        console.log(i);
        element.classList.remove('text-animated');
      });
      index = 0;
      initslide();
      console.log(letters);
    };

    const initslide = () => {
      if (flag === 0) insertLetters();
      flag = 1;
      addClass();

      interval = setInterval(addClass, timer);
    };
    setTimeout(initslide, 100);
  }
}

export default new Scene2();
