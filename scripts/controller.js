const navItems = document.getElementById("nav_list").querySelectorAll("li");
const container = document.getElementById("container");
const maintext = document.getElementById("main_text");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
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

  container.classList.add("blur_animation");
  container.style.backgroundImage = `url('${imagePath}')`;
  setTimeout(()=>{container.classList.remove("blur_animation");}, 1000)

}

function initWeb() {
  container.classList.add("blur_animation");
  setTimeout(()=>{container.classList.remove("blur_animation");}, 2000)


}

initWeb()