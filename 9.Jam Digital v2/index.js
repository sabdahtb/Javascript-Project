function darkmode(){
    document.body.classList.toggle('dark');
}

setInterval(() => {
    
    const jam = document.querySelector('.jam');
    const menit = document.querySelector('.menit');
    const detik = document.querySelector('.detik');

    let j = new Date().getHours();
    let m = new Date().getMinutes();
    let d = new Date().getSeconds();

    jam.innerHTML = j;
    menit.innerHTML = m;
    detik.innerHTML = d;

    //? UNTUK TANGGAL 

    const bulan = document.querySelector('.bulan');
    const tanggal = document.querySelector('.tanggal');
    const tahun = document.querySelector('.tahun');

    let b = new Date().toLocaleString(navigator.language,{month:'long'});
    let tgl = new Date().getDate();
    let thn = new Date().toLocaleString(navigator.language,{weekday:'long'});
    
    bulan.innerHTML = b;
    tanggal.innerHTML = tgl;
    tahun.innerHTML = thn ;

}, 1000);