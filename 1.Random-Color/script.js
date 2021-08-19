//?================================
//? Membuat pengaturan warna
//?================================
//? contoh background color rgb(122,122,122)

const tombol = document.querySelector('.btn');

tombol.addEventListener('click',function(){

    setInterval(() => {
        const merah = Math.floor(Math.random()*255);
        const hijau = Math.floor(Math.random()*255);
        const biru = Math.floor(Math.random()*255);
    
        document.body.style.backgroundColor=`rgb(${merah},${hijau},${biru})`;
        
    //? ================================
    //? Menampilkan pengaturan warna dibawah tombol
    //? ================================

        let tampil = document.querySelector('.output');

        tampil.textContent=`rgb(${merah}, ${hijau}, ${biru} )`

        return tombol;
    }, 400);
});

