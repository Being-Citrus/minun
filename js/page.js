function hoverColorPage(ele,newColor){
  if(ele.className.indexOf("banner-page") < 0){ $(ele).css({"color" : newColor});}
  $(".banner-page").css({"background" : newColor});
  $(newColor).css({"opacity" : "1"});
  if(newColor == '#666'){
    $('.logo-page img').css({"opacity" : "0"});
  }
}

function loadingOff(){
  setTimeout(function(){
    $('.loading img').css({"width": "200px" ,"margin-left": "-100px" ,"margin-top": "-60px" ,"opacity":"0" });
  }, 100);
  setTimeout(function(){
    $('.loading').fadeOut("slow", function(){
          // $('.sketch img').attr('src',sketchHome);
    });
  }, 200);
}

var myimages=new Array()
function preloadimages(){
    for (i=0;i<preloadimages.arguments.length;i++){
        myimages[i]=new Image();
        myimages[i].src=preloadimages.arguments[i];
    }
}
function loadPage(page){
  if($(window).width()<=499){
  if(page == '.'){
    $('.logo-page-container').css({"left":"calc(100% - 80px)", "box-shadow": "none"});
    $('.mobile-menu-page').css({"left":"0"});
    var tColor = $('.logo-page-container').html().split("hoverColorPage(this,'")[1].split("'")[0];
    setTimeout(function(){
      $('.logo-page-container').html("<a href='javascript: hideMobileMenu(&apos;"+tColor+"&apos;)'><img src='images/close.svg'></a>");
    }, 400);
  }
  else{
    $('.load-overlay').fadeIn("slow", function(){
      window.location=page;
    });
  }
  }
  else{
  $('.load-overlay').fadeIn("slow", function(){
    window.location=page;
  });
}
}
function loadPageDirect(page){
  $('.load-overlay').fadeIn("slow", function(){
    window.location=page;
  });
}
function hideMobileMenu(tColor){
  if($(window).width()<=499){
    $('.logo-page-container').css({"left":"0", "box-shadow": "0 0 5px rgba(0,0,0,.2)"});
    $('.mobile-menu-page').css({"left":"calc(80px - 100%)"});
    var tHtml = '<a href="javascript:loadPage(&apos;.&apos;)" onmouseover="hoverColorPage(this,&apos;'+tColor+'&apos;)" onmouseout="hoverColorPage(this,&apos;#666&apos;)"> <div class="logo-page"> <img id="EB7B3C" src="images/hex-orange.png" /> <img id="30A8D5" src="images/hex-blue.png" /> <img id="CE2464" src="images/hex-maroon.png" /> <img id="72a01c" src="images/hex-green.png" /> </div></a>';
    setTimeout(function(){
      $('.logo-page-container').html(tHtml);
    }, 300);
  }
}

$(window).on("load", function() {
    preloadimages('images/hex-grey.png', 'images/hex-orange.png', 'images/hex-blue.png', 'images/hex-green.png', 'images/hex-maroon.png');
    loadingOff();
});
