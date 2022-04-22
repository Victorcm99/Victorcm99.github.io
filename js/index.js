$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
      height: 250,
      interval: 9000
    });
    $('textarea#comentario').characterCounter();

    $("form#formEnvio").validetta({
      bubblePosition: 'bottom',
      bubbleGapTop: 10,
      bubbleGapLeft: -5
  });
  });