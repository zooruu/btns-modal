'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');



const showModal = function(){
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}



const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}



for(let i = 0; i < showModalBtns.length ; i++){
    // console.log(showModalBtns[i].textContent);
    // Listen to all Btns 
    showModalBtns[i].addEventListener('click', showModal);
}


closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);