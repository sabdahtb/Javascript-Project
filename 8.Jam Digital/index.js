setInterval(() => {
const jam = document.querySelector('.jamisi');
const menit = document.querySelector('.menit');
const detik = document.querySelector('.detik');

let j = new Date().getHours();
let m = new Date().getMinutes();
let d = new Date().getSeconds();

jam.innerHTML=j;
menit.innerHTML=m;
detik.innerHTML=d;

}, 1000);