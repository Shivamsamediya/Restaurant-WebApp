var nav=document.querySelector(".nav")
var cnt=0;
myfunction=()=>{
    if(cnt==0){
        nav.style.display="inline";
        cnt++;
    }
    else{
        nav.style.display="none";
        cnt--;
    }
}