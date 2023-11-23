document.addEventListener('DOMContentLoaded', startPage);

function startPage(){

    'use strict'

    let logo = document.querySelector(".logo-img");
    let imagen1 = document.querySelector(".imagen-1-seccion-6");
    let imagen2 = document.querySelector(".imagen-2-seccion-6");
    let imagen3 = document.querySelector(".imagen-3-seccion-6");
    let imagen4 = document.querySelector(".imagen-4-seccion-6");
    let duende = document.querySelector(".duende");

    onscroll = (e) => {
        console.log(window.scrollY);
        if(window.scrollY >= 0 && window.scrollY < 265){
            logo.style.transform = `translateY(${-window.scrollY * 0.7}px) scale(${1- window.scrollY/320})`;
        } else {
            logo.style.transform = `translateY(-185px) scale(0.17)`;

        }

        if(window.scrollY > 300){
            duende.style.transform = `translateY(${window.scrollY - (window.scrollY*0.92)}px)`;
        }

        if(window.scrollY < 3800){
            imagen1.style.opacity = 0;
            imagen2.style.opacity = 0;
            imagen3.style.opacity = 0;
            imagen4.style.opacity = 0;
        }
        
        if(window.scrollY >= 3800){
            imagen1.style.opacity = 1;
            imagen2.style.opacity = 0;
            imagen3.style.opacity = 0;
            imagen4.style.opacity = 0;
        }

        if(window.scrollY >= 4250){
            imagen1.style.opacity = 0;
            imagen2.style.opacity = 1;
            imagen3.style.opacity = 0;
            imagen4.style.opacity = 0;
        }

        if(window.scrollY >= 4900){
            imagen1.style.opacity = 0;
            imagen2.style.opacity = 0;
            imagen3.style.opacity = 1;
            imagen4.style.opacity = 0;
        }

        if(window.scrollY >= 5700){
            imagen1.style.opacity = 0;
            imagen2.style.opacity = 0;
            imagen3.style.opacity = 0;
            imagen4.style.opacity = 1;
        }

        if(window.scrollY >= 6050){
            imagen1.style.opacity = 0;
            imagen2.style.opacity = 0;
            imagen3.style.opacity = 0;
            imagen4.style.opacity = 0;
        }
    }
}