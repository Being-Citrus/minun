var divArray = document.getElementsByClassName('portfolio-thumb');
var imageArray = [];
for(var i=0; i<divArray.length; i++){
  imageArray[i]=$(divArray[i].innerHTML).attr('src').replace("-01","-02");
}
function loadPortImg(position, current){
  var imgVar;
  console.log(position+"-"+current);
  for(var i=0; i<imageArray.length; i++){
    if(imageArray[i]==current){
      if(position=='prev'){
        if(i==0){
          imgVar=imageArray[(imageArray.length)-1];
          break;
        }
        else{
          imgVar=imageArray[i-1]; break;
        }
      }
      else if(position=='next'){
        if(i==(imageArray.length-1)){
        imgVar=imageArray[0]; break;
        }
        else{
        imgVar=imageArray[i+1]; break;
        }
      }
    }
  }
  $(".pb-img").html("<img src='"+imgVar+"' >");
  $(".pb-left").html("<a href='javascript: loadPortImg(&apos;prev&apos;, &apos;"+imgVar+"&apos;)'><img src='images/left.png'></a>");
  $(".pb-right").html("<a href='javascript: loadPortImg(&apos;next&apos;, &apos;"+imgVar+"&apos;)'><img src='images/right.png'></a>");
}
$('.portfolio-thumb img').on("click", function(){
  var popImg="<img src='"+$(this).attr('src').replace("-01","-02")+"' >";
  var prevVar="<a href='javascript: loadPortImg(&apos;prev&apos;, &apos;"+$(this).attr('src').replace("-01","-02")+"&apos;)'><img src='images/left.png'></a>";
  var nextVar="<a href='javascript: loadPortImg(&apos;next&apos;, &apos;"+$(this).attr('src').replace("-01","-02")+"&apos;)'><img src='images/right.png'></a>";
  $(".pb-img").html(popImg);
  $(".pb-left").html(prevVar);
  $(".pb-right").html(nextVar);
  $(".pop-box").fadeIn(100);
});
$(function() {
$(".pb-img").swipe( {
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if(direction=='left'){
      console.log("left");
      var params = $(".pb-right a").attr('href').split("(")[1].split(")")[0].replace(/'/g,"").split(",");
      loadPortImg(params[0].trim(), params[1].trim());
    }
    else if(direction=='right'){
      console.log("right");
      var params = $(".pb-left a").attr('href').split("(")[1].split(")")[0].replace(/'/g,"").split(",");
      loadPortImg(params[0].trim(), params[1].trim());
    }
  }
});
$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    if($('.pop-box').css('display')!="none"){
    var params = $(".pb-left a").attr('href').split("(")[1].split(")")[0].replace(/'/g,"").split(",");
    loadPortImg(params[0].trim(), params[1].trim());
    }
  }
  else if(e.keyCode == 39) { // right
    if($('.pop-box').css('display')!="none"){
    var params = $(".pb-right a").attr('href').split("(")[1].split(")")[0].replace(/'/g,"").split(",");
    loadPortImg(params[0].trim(), params[1].trim());
    }
  }
});
});
