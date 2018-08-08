$(document).ready(function() {

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 40,
    gutter: 10,
    fitWidth: true,
    transitionDuration: '0.2s',
});

 var cssTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      $(this.oldContainer).toggleClass('pge-transition');

      return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
          resolve();
        }, 300);
      });

    },

    fadeIn: function(){
      this.done();
    }
  });

  Barba.Pjax.getTransition = function() {
    return cssTransition;
  }

    Barba.Pjax.start();

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
});





Barba.Dispatcher.on('linkClicked', function(currentStatus, oldStatus, container) {


});

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 40,
        gutter: 10,
        fitWidth: true,
        transitionDuration: '0.2s',
    });
    $('.grid').masonry('reloadItems');

});