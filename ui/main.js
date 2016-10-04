console.log('Loaded!');
//change the text 
var element=document.getElementById("mainId");
element.innerHTML="Bharat Mata Ki Jai";
//move the image
var img = document.getElementById("mee");
marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft =  marginLeft + 'px'; 
}
img.onclick = function() {
    var interval = setInteval(moveRight,50);
};
