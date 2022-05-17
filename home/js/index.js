function learn(){
  document.querySelector(".learn-hover").style.display = "block";
  document.querySelector(".contact-dis-none").style.display="none";

}
function learnout(){
  document.querySelector(".learn-hover").style.display = "none";

}
// touch events - touchstart,touchend,touchmove,touchcancle
document.querySelector('.ml').addEventListener('touchstart',d);
document.querySelector('main').addEventListener('touchstart',da);
let xs =  document.querySelector('.learn-hover-m');
function d(){
 
  if (xs.style.display=='none') {
    console.log('true');
   document.querySelector('.learn-hover-m').style.display='block';
  }else{
 
  document.querySelector('.learn-hover-m').style.display='none';
}
}
function da(){  
 
  document.querySelector('.learn-hover-m').style.display='none';
}
// contact fun
let ox = false;
let contactuso = document.querySelector(".contact-dis-none");
function cont(a,b,c){
  if(b)
  {
    document.querySelector(".contact-dis-none").style.display="block";
    ox=true;
  }
  if(a&&b){
  document.querySelector(".contact-dis-none").style.display="block";
   ox = false;
   
  }

  if(ox&&c){
    document.querySelector(".contact-dis-none").style.display="none";
  }
  if(a&&c){
    document.querySelector(".contact-dis-none").style.display="none";
  }
  
}
// btn-m mobile touch // contact us 
let btnm = document.querySelector(".btn-mobile");
btnm.addEventListener('touchstart' , mobi);
function mobi(){
  if (contactuso.style.display=="none") {
    contactuso.style.display="block";
  }else{
    contactuso.style.display="none";
  }
}

 

