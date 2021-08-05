//? ===========================
//?  MEMANGGIL ELEMENT HTML
//? ===========================

let nomor = 0;
const tampil = document.querySelector('.nomor');

//? ===========================
//?  MEMBUAT FUNCTION TOMBOL
//? ===========================

const mundur = document.querySelector('.mundur')
mundur.addEventListener('click',function(){
    tampil.textContent= nomor--;
});