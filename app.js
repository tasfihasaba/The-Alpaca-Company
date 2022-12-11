var images =['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg']
var i = 0;
function slideShow(){
   document.getElementById("image").src=images[i];
 
   if(i<images.length-1){
       i++;
   }
   else {
       i = 0;
   }
   setTimeout("slideShow()", 3000);
}
window.onload = slideShow;
