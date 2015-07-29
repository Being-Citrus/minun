function hoverColorPage(ele,newColor){
  if(ele.className.indexOf("banner-page") < 0){ $(ele).css({"color" : newColor});}
  console.log(ele.className);
  $(".banner-page").css({"background" : newColor});
  $(newColor).css({"opacity" : "1"});
  if(newColor == '#666'){
    $('.logo-page img').css({"opacity" : "0"});
  }
}

function loadingOff(){
  setTimeout(function(){
    $('.loading img').css({"width": "200px" ,"margin-left": "-100px" ,"margin-top": "-60px" ,"opacity":"0" });
  }, 1500);
  setTimeout(function(){
    $('.loading').fadeOut("slow", function(){
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
    preloadimages('images/hex-grey.png', 'images/hex-orange.png', 'images/hex-blue.png', 'images/hex-green.png', 'images/hex-maroon.png');
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
