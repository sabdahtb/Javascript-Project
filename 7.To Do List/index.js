//? PANGGIL HTML =============================

const todo = document.querySelector('.todo') 

//? TAMBAH TODO ==============================

function tambah(){
    const txt = document.querySelector('.txt');
   
    if(txt.value == ''){
        alert('Todo todak boleh kosong')
    }else{   
    let newtodo = `<li class="todolist">
    <span class="todotxt" onclick="done(this)" title="Click if Todo Finished">${txt.value}</span>
    <span class="hapus">🗑️</span></li>`

    todo.insertAdjacentHTML('afterbegin',newtodo);

    txt.value = ''
    }
};

//? SELESAI =================================

function done(x){
    x.classList.toggle('done');
}

//? HAPUS ===================================

document.addEventListener('click',function(e){
    if(e.target.classList.contains('hapus')){
        e.target.parentElement.remove();
    }
});