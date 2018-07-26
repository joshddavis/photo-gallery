const images = document.getElementsByClassName('image');

//using these variables for the functions at the bottom
var fadeo, fadei;
var i = 1;

//fill the stage with the first image in the list when the page loads
document.getElementById('stage').innerHTML = images[0].children[0].outerHTML;

//adding ids and classes
document.getElementById('stage').id = 'stagejs';
document.getElementById('imagebucket').id = 'thumbs';
Array.from(images).forEach((item) => {
  item.classList.add('imagejs');
  item.children[0].classList.add('thumb');
});

//event listener for the thumbnail images
var elems = document.getElementsByClassName('thumb');
  for (var a = 0; a < elems.length; a++)  {

    elems[a].addEventListener('click', (e) => {
      //get the src of the clicked image
      const newsrc = e.target.attributes[0].value;
      //update the stage with the clicked source...will eventually replace this with the fade functions below
      document.getElementById('stagejs').children[0].attributes[0].value = newsrc;

  //this setInterval and the 2 functions below are how im trying update the stage with a fade effect
 //setInterval(fadeout(i), 2);

  });

}

function fadeout(i) {
    	if (i > 0) {
    		document.getElementById('stagejs').children[0].style.opacity = parseFloat(i - .01).toFixed(2);
        i = parseFloat(i - .01).toFixed(2);
    		console.log(i);
      } else {
    		clearInterval();
        document.getElementById('stagejs').children[0].attributes[0].value = newsrc;
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
