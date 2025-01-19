var profile=document.querySelector("#profile");
var title=document.querySelector("#title");
var description=document.querySelector("#description");
var btnyes=document.querySelector("#btnyes");
var btnno=document.querySelector("#btnno");
var btnreset=document.querySelector('#btnreset');
var happycat=new Audio("audio/gta-san-andreas-mission-complete-sound-hq.mp3");
var sadcat=new Audio("audio/wait-wait-wait-what-the-hell-legend-sound.mp3");
profile.src="photo/Hd_dog_hold_flower.jpg";
profile.alt="Profile not found";
title.innerHTML="- Lysorng";
description.innerHTML="Be Mine..?💌"
btnyes.innerHTML="Oh Yes!";
btnno.innerHTML="No way!";

btnyes.addEventListener("click",()=>{
  profile.src="gif/dancin_baby.gif"
  description.innerHTML="ヾ(≧ ▽ ≦)ゝ"
  sadcat.pause();
  sadcat.currentTime = 0;
  happycat.play();
})

btnno.addEventListener("click",()=>{
  profile.src="gif/gif_nono.gif"
  description.innerHTML="(┬┬﹏┬┬)"
  happycat.pause();
  happycat.currentTime = 0;
  sadcat.play();
})

btnreset.addEventListener("click",()=>{
  profile.src="photo/Hd_dog_hold_flower.jpg"
  description.innerHTML="Be Mine..?💌"
  sadcat.pause();
  sadcat.currentTime = 0;
  happycat.pause();
  happycat.currentTime = 0;
})
