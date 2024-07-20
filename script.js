let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let navLink = document.querySelector('.navlink');

btnClose.onclick = function(){
    navLink.classList.add('hide');
    this.classList.add('hide');
    btnOpen.classList.remove('hide');
}

btnOpen.onclick = function(){
    this.classList.add('hide');
    btnClose.classList.remove('hide');
    navLink.classList.remove('hide');
}