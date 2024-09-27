let startTime,updatedTime,difference;
let timerInterval;
let running=false;
const timerDisplay=document.querySelector('h1');
const lapList = document.getElementById('laps');
function startTimer(){
  if (!running){
    running=true;
    startTime=new Date().getTime()-(difference||0);
    timerInterval=setInterval(updateTime,10);
  }
}
function updateTime(){
  updatedTime=new Date().getTime();
  difference=updatedTime-startTime;
  const milliseconds=Math.floor((difference%1000)/10);
  const seconds=Math.floor((difference/1000)%60);
  const minutes=Math.floor((difference/(1000*60))%60);
  timerDisplay.textContent=`${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}
function pad(unit){
  return unit<10?`0${unit}`:unit;
}
function pauseTimer(){
  running=false;
  clearInterval(timerInterval);
}
function resetTimer(){
  clearInterval(timerInterval);
  running=false;
  timerDisplay.textContent="00:00:00";
  difference=0;
  lapList.innerHTML='';
}
function addLap(){
  const lapTime=timerDisplay.textContent;
  const lapItem=document.createElement('li');
  lapItem.textContent=`Lap:${lapTime}`;
  lapList.appendChild(lapItem);
}
document.getElementById('start').addEventListener('click',startTimer);
document.getElementById('pause').addEventListener('click',pauseTimer);
document.getElementById('reset').addEventListener('click',resetTimer);
document.getElementById('lap').addEventListener('click',addLap);
