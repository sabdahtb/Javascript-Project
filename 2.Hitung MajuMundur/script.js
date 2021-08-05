//? ===========================
//?  MEMANGGIL ELEMENT HTML
//? ===========================

const tampil = document.querySelector('.nomor');
const btns = document.querySelectorAll('.btn');
const mundur = document.querySelector('.mundur');
const reset = document.querySelector('.reset');
const maju = document.querySelector('.maju')
//? ===========================
//?  MEMBUAT FUNCTION TOMBOL
//? ===========================

let nomor = 0;

mundur.addEventListener('click',function(){
    nomor--;
    tampil.innerHTML=nomor;
    tampil.style.color='red'
});
if(nomor<0){
    tampil.style.color='red'
}

reset.addEventListener('click',function(){
    nomor=0;
    tampil.innerHTML=nomor;
});

maju.addEventListener('click',function(){
    nomor++;
    tampil.innerHTML=nomor;
});


if(nomor>0){
    tampil.style.color='green'
}