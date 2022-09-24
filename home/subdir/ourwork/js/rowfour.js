let kypa = document.querySelector(".ao")
let kypb = document.querySelector(".bo")
let kypc = document.querySelector(".co")
let kypd = document.querySelector(".do")
function kypinfo(a,b,c,d){
  if(a){
    kypa.style.display="block";
    kypb.style.display="none";
    kypc.style.display ="none";
    kypd.style.display ="none";
  } 
    
  if(b){
     kypa.style.display = "none";
     kypb.style.display = "block";
     kypc.style.display ="none";
     kypd.style.display ="none";
    }
  if(c){
     kypa.style.display = "none";
     kypb.style.display = "none";
     kypc.style.display ="block";
     kypd.style.display ="none";
  }
  if(d){
    kypa.style.display = "none";
    kypb.style.display = "none";
    kypc.style.display ="none";
    kypd.style.display ="block";
 }
    }

 