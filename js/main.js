var sketchHome = 'images/sketch.gif?x='+Math.floor(Math.random()*100000);
function hoverColor(ele,newColor){
  $(ele).css({"color" : newColor});
  $('.title-home #text').css({"color" : newColor});
  $(newColor).css({"opacity" : "1"});
  if(newColor == '#666'){
    $('.logo-home img').css({"opacity" : "0"});
  }
}
function loadingOff(){
  setTimeout(function(){
    $('.loading img').css({"width": "200px" ,"margin-left": "-100px" ,"margin-top": "-60px" ,"opacity":"0" });
  }, 1500);
  setTimeout(function(){
    $('.loading').fadeOut("slow", function(){
      $('.logo-home').css({"margin-top":"-140px","opacity":"1","width":"100px","height":"100px","margin-left":"-50px"});
      $('.title-home').css({"opacity":"1"});
      $('.menu-home').css({"margin-top":"25px","opacity":"1"});
      setTimeout(function(){
          $('.menu-home').addClass('shadow');
          $.playSound('sounds/tap');
      }, 1100);
      // $('.sketch img').attr('src',sketchHome);

    });
  }, 2000);
}
var myimages=new Array()
function preloadimages(){
    for (i=0;i<preloadimages.arguments.length;i++){
        myimages[i]=new Image();
        myimages[i].src=preloadimages.arguments[i];
    }
}
function loadPage(page){
  console.log("inside loadpage");
  $('.load-overlay').fadeIn("slow", function(){
    window.location=page;
  });
}
$(document).ready(function(){
    preloadimages('images/logo-light.png', 'images/logo-grey.png', 'images/logo-orange.png', 'images/logo-blue.png', 'images/logo-green.png', 'images/logo-maroon.png', sketchHome);
    $.ajax({
        url: "sounds/tap.mp3",
        success: function() {
          $.ajax({
              url: "sounds/tap.ogg",
              success: function() {
                $.ajax({
                    url: "sounds/tap.aac",
                    success: function() {
                        console.log("loaded sounds");
                        loadingOff();
                    }
                });
              }
          });
        }
    });

});
