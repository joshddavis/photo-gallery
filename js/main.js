const images = document.getElementsByClassName('image');

//using these variables for the fade functions at the bottom
var fade_out_from = 10;
var fade_in_from = 0;

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
    //fade out the stage, update with the clicked image, fade back in
    fadeout();
    document.getElementById('stagejs').children[0].attributes[0].value = newsrc;
    fadein();

  });

}

function fadeout() {
  var target = document.getElementById('stagejs');
  var newSetting = fade_out_from / 10;
  target.style.opacity = newSetting;
  fade_out_from--;
  if(fade_out_from == 0) {
    target.style.opacity = 0;
    clearTimeout(loopTimer);
    fade_out_from = 10;
    return false;
}
  var loopTimer = setTimeout('fadeout()', 25);
}

function fadein() {
  var target = document.getElementById('stagejs');
  var newSetting = fade_in_from / 10;
  target.style.opacity = newSetting;
  fade_in_from++;
  if(fade_in_from == 10) {
    target.style.opacity = 1;
    clearTimeout(loopTimer);
    fade_in_from = 0;
    return false;
}
  var loopTimer = setTimeout('fadein()', 25);
}
