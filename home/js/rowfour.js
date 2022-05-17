let kyph = document.getElementById("kyp-see-home");
let kypa = document.getElementById("kyp-see-a");
let kypb = document.getElementById("kyp-see-b");
let kypc = document.getElementById("kyp-see-c");

function kypinfo(a,b,c){
  if(a){
    kyph.style.display="none";
    kypa.style.display="block";
    kypb.style.display = "none";
    kypc.style.display = "none";
  } 
    
  if(b){
     kyph.style.display = "none";
     kypa.style.display = "none";
     kypb.style.display = "block";
     kypc.style.display = "none";
    }
  if(c){
          kyph.style.display = "none";
          kypa.style.display = "none";
          kypb.style.display = "none";
          kypc.style.display = "block";
        }
    }
// tra
function rowtra(){
  let rt = document.querySelector(".row-mission-img-one");
 
  rt.style.display="block";
  rt.style.animation ="slidein 3s";
  }
  // 
    let a = 700;
    let b=0;
    window.addEventListener('scroll',function(){
     b = this.window.pageYOffset;
     if(b>=400) da();
     if(b<=600||b>=1810) kyp_h();
     if(b>=400) rowtra();
    })
    
function kyp_h(){
  kyph.style.display="block";
  kypa.style.display="none";
  kypb.style.display = "none";
  kypc.style.display = "none";
}
// img transition - row -3

