$(document).ready(function() {
  /*var transEffect = Barba.BaseTransition.extend({
    start: function(){
      this.newContainerLoading.then(val => this.fadeInNewContent($(this.newContainer)));
    },
    fadeInNewContent: function(nc){
      nc.hide();
      $(this.oldContainer).
    }
  });*/

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

$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 400,
    fitWidth: true,
    containerStyle: relative,
    transitionDuration: '0.2s',
});




Barba.Dispatcher.on('linkClicked', function(currentStatus, oldStatus, container) {


});

Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 400,
        fitWidth: true,
        containerStyle: relative,
        transitionDuration: '0.2s',
    });
    $('.grid').masonry('reloadItems');

});