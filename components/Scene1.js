class Scene1 {
    template() {
      return `
      <div id="main_text"><span id="text_split"></span></div>
      `;
    }

    text_split() {
      const $text_split = document.getElementById('text_split')
      const context = 'Silent Night\nHoly Night'
      const textArray = context.split('')
      console.log(textArray)

      const createNode = (tagname) => {
        const tag = document.createElement(tagname);
        return tag
      }

      const insertLetters = () => {
        textArray.forEach((letter) => {
          const textNode = createNode('span');
          if (letter === ' ') {
            textNode.textContent = '\xa0';
          } else if (letter === '\n') {
            const br = createNode('br');
            $text_split.appendChild(br);
          } else {
            textNode.textContent = letter;
          }
          $text_split.appendChild(textNode);
        });
      };

      insertLetters()
    }

  }
  export default new Scene1();