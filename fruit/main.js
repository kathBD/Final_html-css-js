

let cards = document.getElementsByClassName('.card');
let impares = document.querySelectorAll('#impar');
let pares = document.querySelectorAll('#par');



const bgColor =()=>{

    let impares = document.querySelectorAll('#impar');
    let pares = document.querySelectorAll('#par');



}

function par() {

    impares.forEach(impar => {
        impar.remove();
        document.body.style.backgroundColor = 'black';
    })
     
} 

function impar() {
    pares.forEach(par => {
        par.remove();
        document.body.style.backgroundColor = '#320ae4';
    })

}
