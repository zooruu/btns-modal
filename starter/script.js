'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');


const closeModal= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const showModal= function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', closeModal);

for ( let i = 0; i < showModalBtns.length; i++){
    showModalBtns[i].addEventListener('click', showModal);
}