
counter = 0;
counter++;

let video2 = document.querySelector("video");

let body = document.querySelector("body");
let height = window.innerHeight;
let width = window.innerWidth;

let newVideo = video2.cloneNode();

let modal =	document.createElement('div');
modal.className = "modal";



modal.setAttribute("style" , "width: "+ width+"px; " + "height: "+ height+"px; ");
video2.setAttribute("style" , "width: "+ width+"px; " + "height: "+ height+"px; ");

body.appendChild(modal);

video2.setAttribute("controls",'');
video2.setAttribute("autoplay",'');

modal.appendChild(video2);
video2.play();
