//?===================
//? MEMANGGIL GAMBAR
//?===================

const tutup = document.querySelector('.tutup');
const buka = document.querySelector('.buka');
const muncul = document.querySelector('.muncul')

//?=========================
//? BUAT FUNCTION CILUK BA
//?=========================

tutup.addEventListener('click',()=>{

//?============================================
//? MENGGANTI WARNA BG SETIAP DI KLIK
//?============================================

    let merah = Math.floor(Math.random()*255);
    let hijau = Math.floor(Math.random()*255);
    let biru = Math.floor(Math.random()*255);


    document.body.style.backgroundColor=`rgb(${merah}, ${hijau}, ${biru})`

    if(buka.classList.contains('buka')){
        buka.classList.add('active');
        tutup.classList.remove('active')
        muncul.innerHTML='baaaaa!!!'
    }
    return tutup;
});

buka.addEventListener('click',()=>{

    let merah = Math.floor(Math.random()*255);
    let hijau = Math.floor(Math.random()*255);
    let biru = Math.floor(Math.random()*255);


    document.body.style.backgroundColor=`rgb(${merah}, ${hijau}, ${biru})`

    if(tutup.classList.contains('tutup')){
        tutup.classList.add('active');
        buka.classList.remove('active')
        muncul.innerHTML='ciiluuukkkkk!!!'
    }
    return buka;
});
