$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 40,
  gutter: 10,
  fitWidth: true,
  transitionDuration: '0.2s',
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
