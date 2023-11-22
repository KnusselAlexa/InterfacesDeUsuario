document.addEventListener('DOMContentLoaded', startPage);

function startPage(){

    'use strict'

    let logo = document.querySelector(".logo-img");

    onscroll = (e) => {

        if(window.scrollY >= 0 && window.scrollY < 265){
            logo.style.transform = `translateY(${-window.scrollY * 0.7}px) scale(${1- window.scrollY/320})`;
        } else {
            logo.style.transform = `translateY(-185px) scale(0.17)`;

        }
    }
}