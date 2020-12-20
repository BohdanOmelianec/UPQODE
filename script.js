const teamContent = document.querySelectorAll('.team_content'),
    images = document.querySelectorAll('.item'),
    miniImagesN = document.querySelectorAll('.next'),
    miniImagesP = document.querySelectorAll('.prev'),
    toggleNameN = document.querySelector('.toggle_nameN'),
    toggleNameP = document.querySelector('.toggle_nameP'),
    btnNext = document.querySelector('.toggle_left'),
    btnPrev = document.querySelector('.toggle_right'),
    nextImage = document.querySelector('.mini_img_next'),
    prevImage = document.querySelector('.mini_img_prev');
const Link = document.querySelectorAll('.navLink')[0];
const Link1 = document.querySelectorAll('.navLink')[1];
const Link2 = document.querySelectorAll('.navLink')[2];
const Link3 = document.querySelectorAll('.navLink')[3];

const links = document.querySelectorAll('.nav_menu_footer .link')[0];
const links1 = document.querySelectorAll('.nav_menu_footer .link')[1];
const links2 = document.querySelectorAll('.nav_menu_footer .link')[2];
const links3 = document.querySelectorAll('.nav_menu_footer .link')[3];



// const navMenu = document.querySelector('.nav_menu');
// const Services = document.querySelector('#services');
// const Team = document.querySelector('#team');
// const Contact = document.querySelector('#contactus');
// console.log(Team);

function screenSize() {
    document.querySelector('.main_page').style = `height: ${screen.height}px;`;
}
screenSize();

Link.addEventListener('click', () => {
    scrollTo({top: 0, behavior: 'smooth'});
});
Link1.addEventListener('click', () => {
    scrollTo({top: 1154, behavior: 'smooth'});
});
Link2.addEventListener('click', () => {
    scrollTo({top:3400, behavior: 'smooth'});
});
Link3.addEventListener('click', () => {
    scrollTo({top: 4170, behavior: 'smooth'});
});

links.addEventListener('click', () => {
    scrollTo({top: 0, behavior: 'smooth'});
});
links1.addEventListener('click', () => {
    scrollTo({top: 1154, behavior: 'smooth'});
});
links2.addEventListener('click', () => {
    scrollTo({top:3400, behavior: 'smooth'});
});
links3.addEventListener('click', () => {
    scrollTo({top: 4170, behavior: 'smooth'});
});




function changeName() {
    const teamH2 = document.querySelectorAll('.team_h2');

    teamContent.forEach((key, i) => {
        if (key.classList.contains('active')) {
            if (i == teamH2.length - 1) {
                toggleNameN.innerHTML = teamH2[0].textContent;
                toggleNameP.innerHTML = teamH2[i - 1].textContent;

            } else if (i == 0) {
                toggleNameN.innerHTML = teamH2[i + 1].textContent;
                toggleNameP.innerHTML = teamH2[teamH2.length - 1].textContent;
            } else {
                toggleNameN.innerHTML = teamH2[i + 1].textContent;
                toggleNameP.innerHTML = teamH2[i - 1].textContent;
            }

        }
    });
}

btnNext.addEventListener('click', () => {
    let i = 0;
    for (i; i <= teamContent.length && i <= images.length; i++) {
        if (i == teamContent.length - 1) {


            teamContent[i].classList.remove('active');
            images[i].classList.remove('active');
            miniImagesN[i].classList.remove('active');
            miniImagesP[i].classList.remove('active');

            teamContent[0].classList.add('active');
            images[0].classList.add('active');
            miniImagesN[0].classList.add('active');
            miniImagesP[0].classList.add('active');
            changeName();
            return;
        }
        if (teamContent[i].classList.contains('active') && images[i].classList.contains('active')) {


            teamContent[i].classList.remove('active');
            images[i].classList.remove('active');
            miniImagesN[i].classList.remove('active');
            miniImagesP[i].classList.remove('active');

            teamContent[i + 1].classList.add('active');
            images[i + 1].classList.add('active');
            miniImagesN[i + 1].classList.add('active');
            miniImagesP[i + 1].classList.add('active');
            changeName();

            return;
        }
    }
});

btnPrev.addEventListener('click', () => {
    let i = teamContent.length - 1;
    for (i; i >= 0; i--) {
        if (i == 0) {

            teamContent[i].classList.remove('active');
            images[i].classList.remove('active');
            miniImagesP[i].classList.remove('active');
            miniImagesN[i].classList.remove('active');

            teamContent[teamContent.length - 1].classList.add('active');
            images[images.length - 1].classList.add('active');
            miniImagesP[miniImagesP.length - 1].classList.add('active');
            miniImagesN[miniImagesN.length - 1].classList.add('active');

            changeName();

            return;
        }
        if (teamContent[i].classList.contains('active') && images[i].classList.contains('active')) {

            teamContent[i].classList.remove('active');
            images[i].classList.remove('active');
            miniImagesP[i].classList.remove('active');
            miniImagesN[i].classList.remove('active');


            teamContent[i - 1].classList.add('active');
            images[i - 1].classList.add('active');
            miniImagesP[i - 1].classList.add('active');
            miniImagesN[i - 1].classList.add('active');

            changeName();

            return;
        }
    }
});

//Google map
class Cities {
    constructor(name, lat, lng) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}
let LS = new Cities('Los Angeles', 34.07317662164779, -118.2587458736771);
let NY = new Cities('New York', 40.71661427257017, -74.01055114779739);
let Bos = new Cities('Boston', 42.49787814535219, -71.11844648970916);
let Det = new Cities('Detroit', 42.42078366690694, -83.05928666065954);


let map;

function initMap(x = LS.lat, y = LS.lng) {
    let coord = { lat: x, lng: y };
  map = new google.maps.Map(document.getElementById("map"), {
    center: coord,
    zoom: 9,
  });
  new google.maps.Marker({
    position: coord,
    map
  });
}

const ls = document.querySelector('.adress_item1');
const ny = document.querySelector('.adress_item2');
const bos = document.querySelector('.adress_item3');
const det = document.querySelector('.adress_item4');

ls.addEventListener('click', () => {
    initMap(LS.lat, LS.lng);
});
ny.addEventListener('click', () => {
    initMap(NY.lat, NY.lng);
});
bos.addEventListener('click', () => {
    initMap(Bos.lat, Bos.lng);
});
det.addEventListener('click', () => {
    initMap(Det.lat, Det.lng);
});