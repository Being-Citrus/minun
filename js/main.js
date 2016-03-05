//var sketchHome = 'images/sketch.gif?x='+Math.floor(Math.random()*100000);
function hoverColor(ele,newColor){
  if($(window).width()<=420){
    $(ele).css({"color" : "#f4f4f4", "background" : newColor});
    if(newColor == '#666'){
      $(ele).css({"color" : "#666", "background" : "#ededed"});
    }
  }
  else{
    $(ele).css({"color" : newColor});
  }
  $('.title-home #text').css({"color" : newColor});
  $(newColor).css({"opacity" : "1"});
  if(newColor == '#666'){
    $('.logo-home img').css({"opacity" : "0"});
  }
}
function adjustHome(){
  if($(window).width()<=420){
    var newTopMargin = 50 - ($(window).height()/2);
    var newTM1 = newTopMargin + 130;
    var newTM2 = newTopMargin + 150;
    newTopMargin= newTopMargin + "px";
    newTM1 = newTM1 + "px";
    newTM2 = newTM2 + "px";
    $('.logo-home').css({"margin-top":newTopMargin,"opacity":"1","width":"100px","height":"100px","margin-left":"-50px"});
    $('.title-home').css({"opacity":"1", "margin-top": newTM1});
    $('.menu-home').css({"opacity":"1", "margin-top": newTM2});
  }
  else{
    $('.logo-home').css({"margin-top":"-140px","opacity":"1","width":"100px","height":"100px","margin-left":"-50px"});
    $('.title-home').css({"opacity":"1", "margin-top": "-20px"});
    $('.menu-home').css({"margin-top":"25px","opacity":"1"});
  }
}
function loadingOff(){
  if($(window).width()<=420){
    setTimeout(function(){
      $('.loading img').css({"width": "200px" ,"margin-left": "-100px" ,"margin-top": "-60px" ,"opacity":"0" });
    }, 500);
    setTimeout(function(){
      $('.loading').fadeOut("slow", function(){
        adjustHome();
      });
    }, 300);
  }
else{
  setTimeout(function(){
    $('.loading img').css({"width": "200px" ,"margin-left": "-100px" ,"margin-top": "-60px" ,"opacity":"0" });
  }, 1500);
  setTimeout(function(){
    $('.loading').fadeOut("slow", function(){
      adjustHome();
      setTimeout(function(){
          $('.menu-home').addClass('shadow');
      }, 1100);
      // $('.sketch img').attr('src',sketchHome);

    });
  }, 2000);
 }
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
$(window).on("load", function() {
    preloadimages('images/logo-light.png', 'images/logo-grey.png', 'images/logo-orange.png', 'images/logo-blue.png', 'images/logo-green.png', 'images/logo-maroon.png');
    loadingOff();
});
$(window).on('resize', function(){
  adjustHome();
});
