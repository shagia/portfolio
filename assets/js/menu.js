

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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        //openDropdown.classList.remove('show');
      }
    }
  }
}