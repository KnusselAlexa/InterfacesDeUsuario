document.addEventListener('DOMContentLoaded', startPage);

function startPage(){

    'use strict'

    let logo = document.querySelector(".logo-img");

    //Seccion hero
    let cielo = document.querySelector(".fondo-cielo");
    let edificioIzq = document.querySelector(".edificio-izq");
    let edificioCen = document.querySelector(".edificio-cen");
    let edificioDer = document.querySelector(".edificio-der");
    let spiderIzq = document.querySelector(".hero-izq");
    let spiderCen = document.querySelector(".div-hero-cen");
    let spiderDer = document.querySelector(".div-hero-der");

    //Seccion duende
    let duende = document.querySelector(".duende");

    //Seccion cards
    let cardUno = document.querySelector(".card-1");
    let cardDos = document.querySelector(".card-2");
    let cardTres = document.querySelector(".card-3");

    //Seccion amigos
    let imagen1 = document.querySelector(".imagen-1-seccion-6");
    let imagen2 = document.querySelector(".imagen-2-seccion-6");
    let imagen3 = document.querySelector(".imagen-3-seccion-6");
    let imagen4 = document.querySelector(".imagen-4-seccion-6");


    onscroll = (e) => {
        console.log(window.scrollY);
        //Logo
        if(window.scrollY >= 0 && window.scrollY < 265){
            logo.style.transform = `translateY(${-window.scrollY * 0.7}px) scale(${1- window.scrollY/320})`;
        } else {
            logo.style.transform = `translateY(-185px) scale(0.17)`;

        }

        //Seccion duende
        if(window.scrollY > 300){
            duende.style.transform = `translateY(${window.scrollY - (window.scrollY*0.92)}px)`;
        }

        //Seccion hero
  
        if(window.scrollY >= 0 && window.scrollY < 600){
            spiderIzq.style.transform = `translateY(${window.scrollY - (window.scrollY*0.8)}px) 
                                         translateX(${-window.scrollY + (window.scrollY*0.90)}px)`;

            spiderCen.style.transform = `translateY(${window.scrollY - (window.scrollY*0.8)}px)`;

            spiderDer.style.transform = `translateY(${window.scrollY - (window.scrollY*0.8)}px) 
                                         translateX(${window.scrollY - (window.scrollY*0.90)}px)`;

            edificioIzq.style.transform = `translateY(${window.scrollY - (window.scrollY*0.9)}px) 
                                           translateX(${window.scrollY - (window.scrollY*0.96)}px)`;

            edificioCen.style.transform = `translateY(${window.scrollY - (window.scrollY*0.9)}px)`;

            edificioDer.style.transform = `translateY(${window.scrollY - (window.scrollY*0.9)}px) 
                                           translateX(${-window.scrollY + (window.scrollY*0.96)}px)`;

            cielo.style.transform = `translateY(${window.scrollY - (window.scrollY*0.97)}px) 
                                     translateX(${window.scrollY - (window.scrollY*0.87)}px)`;

        }

        if(window.scrollY >= 1600){
            cardUno.style.opacity = 1;
            cardUno.style.transform = `translateY(0)`;
            cardDos.style.opacity = 1;
            cardDos.style.transform = `translateY(0)`;
            cardTres.style.opacity = 1;
            cardTres.style.transform = `translateY(0)`;
        }











        //Seccion amigos
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

        if(window.scrollY >= 6200){
            imagen1.style.opacity = 0;
            imagen2.style.opacity = 0;
            imagen3.style.opacity = 0;
            imagen4.style.opacity = 0;
        }
    }
}