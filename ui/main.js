console.log('Loaded!');
//change the text 
var element=document.getElementById("mainId");
element.innerHTML="Bharat Mata Ki Jai";
//move the image
var img = document.getElementById("mee");
img.onclick = function() {
    img.style.marginLeft = '100px';
};
