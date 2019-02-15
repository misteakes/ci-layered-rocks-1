var controller = new ScrollMagic.Controller();

$(function(){
  var scene = new ScrollMagic.Scene ({triggerElement: "#trigger1", duration: 300})
    .setPin("#envelope")
    .addIndicators({name: "1 (duration:300"})
    .addto(controller);
})













