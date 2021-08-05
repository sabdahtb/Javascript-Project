//? ===========================
//?  MEMANGGIL ELEMENT HTML
//? ===========================

let nomor = 0;
const tampil = document.querySelector('.nomor');
const btns = document.querySelectorAll('.btn')

//? ===========================
//?  MEMBUAT FUNCTION TOMBOL
//? ===========================

const mundur = document.querySelector('.mundur');
mundur.addEventListener('click',function(){
    nomor--;
    tampil.textContent = nomor;
})