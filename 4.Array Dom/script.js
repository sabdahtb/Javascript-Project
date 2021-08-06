//?=================================
//? MEMBUAT ARRAY NYA
//?=================================

let data = [
    {
        nama:'sabda',
        umur:20
    },
    {
        nama:'frans',
        umur:29
    },
    {
        nama:'josua',
        umur:21
    },
    {
        nama:'jolek',
        umur:22
    },
    {
        nama:'arya',
        umur:21
    },
    {
        nama:'boyy',
        umur:22
    }
];

//?========================================
//? MEMBUAT ARRAY MUNCUL PADA HALAMAN HTML
//?========================================

const box = document.querySelector('.box');

let urai = data.map((item) =>{
    return `<div>Nama : ${item.nama} <br> usia : ${item.umur} Tahun </div>`
});

box.innerHTML=urai.join('');   

