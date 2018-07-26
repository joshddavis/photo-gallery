const images = document.getElementsByClassName('image');
var fadeo, fadei;
var i = 1;

document.getElementById('stage').innerHTML = images[0].children[0].outerHTML;
document.getElementById('stage').id = 'stagejs';

Array.from(images).forEach((item) => {
  item.classList.add('imagejs');
  item.children[0].classList.add('thumb');
});

document.getElementById('imagebucket').id = 'thumbs';

var elems = document.getElementsByClassName('thumb');
for (var a = 0; a < elems.length; a++)  {

  elems[a].addEventListener('click', (e) => {
    const newsrc = e.target.attributes[0].value;
    console.log("set new source");

    document.getElementById('stagejs').style.opacity = "1";
    console.log("set opacity");


    document.getElementById('stagejs').children[0].attributes[0].value = newsrc;
    console.log("assigned new source");

setInterval(fadeout(i), 2);



  });

}



function fadeout(i) {
      	if (i > 0) {
      		document.getElementById('stagejs').children[0].style.opacity = parseFloat(i - .01).toFixed(2);
          i = parseFloat(i - .01).toFixed(2);
      		console.log(i);
          } else {
      		clearInterval();

          fadei = setInterval(fadein(i), 2);
          }
}

function fadein(i) {
      if (i < 1) {
              document.getElementById('stagejs').children[0].style.opacity = parseFloat(i + .01).toFixed(2);
              i = parseFloat(i + .01).toFixed(2);
              console.log(i);
              } else {
              clearInterval(fadei);
              }
}
