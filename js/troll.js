document.write('<script src="http://code.onion.com/comcastify.js"></script>');
comcastifyjs.letsPrepareTheseImages();
window.onload = comcastifyjs.fixMyImagesLoadingSoFast({
  loadMaxPercent: 0.75,
  loadSpeed: 1000,
  loadIncrement: 5,
  boxColor: '#ece4d8' 
});
