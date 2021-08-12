let imageSrc = [
  "https://www.nme.com/wp-content/uploads/2020/12/vikings-season-5-ivar-boneless.jpg",
  "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/10/Vikings-True-Story.jpg",
  "https://media.distractify.com/brand-img/rgirlKdtb/0x0/what-happened-to-floki-on-vikings-1575557178315.jpg",
  "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/06/Lagertha-Featured-Image.jpg",
  "https://www.looper.com/img/gallery/is-king-harald-finehair-still-alive-on-vikings/l-intro-1600890976.jpg",
];
let i = 0;
let imageTurn;
const turn = () => {
  console.log(i);
  if (i < imageSrc.length) {
    document.getElementById("image").src = imageSrc[i];
    i++;
  } else {
    i = 0;
  }
};
imageTurn = setInterval(turn, 2000);
function pauseTurn() {
  clearInterval(imageTurn);
}
function resumeTurn() {
  imageTurn = setInterval(turn, 2000);
}
function previousTurn() {
  clearInterval(imageTurn);
  if (i > 0) {
    i = i - 1;
    document.getElementById("image").src = imageSrc[i];
  } else {
    i = 4;
    document.getElementById("image").src = imageSrc[i];
  }

  imageTurn = setInterval(turn, 2000);
}
function nextTurn() {
  console.log(i);
  clearInterval(imageTurn);
  if (i >= 4) {
    i = 0;
    document.getElementById("image").src = imageSrc[i];
  } else {
    i = i + 1;
    document.getElementById("image").src = imageSrc[i];
  }
  console.log(i);
  imageTurn = setInterval(turn, 2000);
}

function slide() {
  x = document.getElementById("image");
  x.className = "fade";
}
