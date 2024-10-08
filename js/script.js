'use strict'
const root = document.documentElement;
const eye = document.querySelector('#eyeball');
const beam = document.querySelector('#beam');
const passwordInput = document.querySelector('#password');

root.addEventListener('mousemove', (e) => {
    let rect = beam.getBoundingClientRect();
    let mouseX = rect.right + (rect.width / 2); 
    let mouseY = rect.top + (rect.height / 2);
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
    let degrees = (rad * (20 / Math.PI) * -1) - 350;
  
    root.style.setProperty('--beamDegrees', `${degrees}deg`);
  });