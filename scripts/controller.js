const navItems = document.getElementById('nav_list').querySelectorAll('li');
const container = document.getElementById('container');
const maintext = document.getElementById('main_text')

navItems.forEach(item => {
    item.addEventListener('click', function() {
        changText(item.id)
        const imagePath = getNewImagePath(item.id);
        changeImage(imagePath);
    });
});

function getNewImagePath(sceneId) {
    switch (sceneId) {
        case 'home':
            return '/imgs/BG1.png';
        case 'scene1':
            return '/imgs/BG2.png';
        case 'scene2':
            return '/imgs/BG3.png';
    }
}

function changText(sceneId) {
    switch (sceneId) {
        case 'home':
            maintext.innerHTML = `We Wish a <br/>Merry <span id="typing_text"></span>`
        case 'scene1':
            maintext.innerHTML = `SantaClus is <br> Coming To Town`
        case 'scene2':
            maintext.innerHTML = `Silent night <br> Holy night`
        case 'scene3':
            maintext.innerHTML = `Whats your <br> Chrstmas?`
    }
}

function changeImage(imagePath) {
    container.style.backgroundImage = `url('${imagePath}')`;
    container.style.animation = 'fadein 1s';
}