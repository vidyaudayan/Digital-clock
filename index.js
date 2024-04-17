const hour= document.getElementById('hour')
const minute=document.getElementById('minute')
const second=document.getElementById('second')
const ampm=document.getElementById('ampm')

function updateClock(){
    let hr= new Date().getHours()
    let mn= new Date().getMinutes()
    let sc=new Date().getSeconds()
    let ap="AM"
    if(hr>12){
        hr=hr-12
        ap="PM";
    }
    hr=hr<10 ? "0" +hr : hr;
    mn=mn<10 ? "0" +mn : mn;
    sc=sc<10 ? "0" +sc : sc;

    hour.innerText=hr;
    minute.innerHTML=mn;
    second.innerText=sc;
    ampm.innerText=ap;
    setTimeout(() => {
      updateClock()  
    }, 1000);
}
updateClock()