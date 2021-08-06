//? ===============================
//? MEMANGGIL ELEMEN HTML
//? ===============================

const box = document.querySelector('.box');

//? =============================================
//? MEMBUAT ANIMASI SAAT CURSOR MASUK DAN KELUAR
//? ============================================

box.addEventListener('mouseenter' , () =>{
    box.classList.add('hover')
});

box.addEventListener('mouseleave' , () =>{
    box.classList.remove('hover')
});

//? CARA KERJA SAMA DENGAN :HOVER DI CSS HANYA INI MEMBUATNYA MELALUI JAVASCRIPT