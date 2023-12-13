const navItems = document.getElementById("nav_list").querySelectorAll("li");
const container = document.getElementById("container");
const maintext = document.getElementById("main_text");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(container)
    const imagePath = getNewImagePath(item.classList);
    changeImage(imagePath);
  });
});

function getNewImagePath(sceneId) {
  switch (sceneId.value) {
    case "home":
      return "/imgs/BG1.png";
    case "scene1":
      return "/imgs/BG3.png";
    case "scene2":
      return "/imgs/BG2.png";
  }
}

function changeImage(imagePath) {
  container.style.backgroundImage = `url('${imagePath}')`;
  container.style.animation = "fadein 1s";
}
