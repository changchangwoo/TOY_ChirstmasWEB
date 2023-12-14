class Scene3 {
  template() {
    return `
      <div id="canvas_container">
      <div id="main_text"> What is your<br> Christmas ? </div>
        <canvas id="snowCanvas"></canvas>
      </div>
    `;
  }

  snowing() {
    const $canvas = document.getElementById("snowCanvas");
    const $canvasContainer = document.getElementById("canvas_container");
    const ctx = $canvas.getContext("2d");

    const getRandomRadius = () => Math.random() * 1 + 0.5;
    const getRandomSpeed = () => Math.random() * 0.3 + 0.1;
    const getRandomDir = () => [-1, 1][Math.floor(Math.random() * 2)];

    const Snow = {
      data: [],
      canvasWidth: 0,
      canvasHeight: 0,

      init() {
        Snow.updateCanvasSize();
        Snow.make();
        Snow.loop();
      },

      updateCanvasSize() {
        Snow.canvasWidth = $canvasContainer.clientWidth;
        Snow.canvasHeight = $canvasContainer.clientHeight;
        $canvas.width = Snow.canvasWidth;
        $canvas.height = Snow.canvasHeight;
      },

      loop() {
        Snow.move();
        Snow.draw();
        window.requestAnimationFrame(Snow.loop);
      },

      make() {
        const data = [];

        // 랜덤한 데이터 200개 생성
        for (let i = 0; i < 200; i++) {
          const x = Math.random() * Snow.canvasWidth;
          const y = Math.random() * Snow.canvasHeight;

          const size = getRandomRadius();
          const speed = getRandomSpeed();
          const dir = getRandomDir();

          data.push({ x, y, size, speed, dir });
        }

        // Snow 객체에 데이터 저장
        Snow.data = data;
      },

      move() {
        Snow.data = Snow.data.map((item) => {
          // 방향에 맞게 이동
          item.x += item.dir * item.speed;
          item.y += item.speed;

          // 캔버스를 벗어났는지 판단
          const isMinOverPositionX = -item.size > item.x;
          const isMaxOverPositionX = item.x > Snow.canvasWidth;
          const isOverPositionY = item.y > Snow.canvasHeight;

          // 벗어나면 반대방향, 맨 위로
          if (isMinOverPositionX || isMaxOverPositionX) {
            item.dir *= -1;
          }
          if (isOverPositionY) {
            item.y = -item.size;
          }

          return item;
        });
      },

      draw() {
        ctx.clearRect(0, 0, Snow.canvasWidth, Snow.canvasHeight);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, Snow.canvasWidth, Snow.canvasHeight);

        Snow.data.forEach((item) => {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255, 255, 255, .9)";
          ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath();
        });
      },
    };

    Snow.init();

    window.onresize = () => {
      Snow.updateCanvasSize();
      Snow.make();
    };
  }
}

export default new Scene3();
