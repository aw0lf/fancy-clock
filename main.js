
  const sHand = document.querySelector('.s-hand');
  const mHand = document.querySelector('.m-hand');
  const hHand = document.querySelector('.h-hand');

function setDate(){
    const now=new Date();
    const sec=now.getSeconds();
    const secDeg=((sec/60)*360)+90;
    sHand.style.transform=`rotate(${secDeg}deg)`;
    
    const min=now.getMinutes();
    const minDeg=((min/60)*360)+((sec/60)*6)+90;
    mHand.style.transform=`rotate(${minDeg}deg)`;

    const hr=now.getHours();
    const hrDeg=((hr/12)*360)+((mins/60)*30)+90;
    hHand.style.transform=`rotate(${hrDeg}deg}`;
}
setInterval(setDate,1000);

setDate();