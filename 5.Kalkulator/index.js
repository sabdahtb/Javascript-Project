//?======================================
//? MEMANGGIL ELELMEN HTML
//?======================================

const tampil = document.querySelector('.tampil')
const clear = document.querySelector('.clear');
const hasil = document.querySelector('.hasil');
const mode = document.querySelector('.mode')

//?===============================================
//? MENAMPILKAN TOMBIL YANG DI KLIK PADA TAMPILAN
//?===============================================

function tombol(x){
    tampil.value = tampil.value + x;
}

//?================================
//? MENJALANKAN FUNGSI KALKULATOR
//?================================

hasil.addEventListener('click', function(){
    if(tampil.value == ""){
        alert('Masukkan Angka')
    }else{
        tampil.value = eval(tampil.value)
    };
})

//?================================
//? MENJALANKAN TOMBOL HAPUS
//?================================

clear.addEventListener('click', function(){
    tampil.value = "";
})

//?================================
//? MENAMPILKAN MODE GELAP
//?================================

mode.addEventListener('click', function(){
    document.body.classList.toggle('dark');
})

















