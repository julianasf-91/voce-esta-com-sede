var cvazio = document.querySelector('img#imagem')
var cmeio = document.querySelector('img#imagem')
var ccheio = document.querySelector('img#imagem')
var imglk = document.querySelector('img#lk')
var imggh = document.querySelector('img#gh')

function copoVazio() {
    cvazio.src = 'img/copovazio.png'
    //window.document.getElementById('imagem').src = 'copovazio.png'   //outra forma de fazer sem variavel
}
function copoMeio() {
    cmeio.src = 'img/meiocopo.png'
    //window.document.getElementById('imagem').src = 'meiocopo.png'
}
function copoCheio() {
    ccheio.src = 'img/copocheio.png'
    //window.document.getElementById('imagem').src = 'copocheio.png'
}
function entrar() {
    imglk.style.background = 'rgb(68, 96, 129)'
    
}
function sair() {
    imglk.style.background = 'rgb(1, 184, 188)'
    
}

function entrar2() {
    imggh.style.background = 'rgb(68, 96, 129)'
    
}
function sair2() {
    imggh.style.background = 'rgb(1, 184, 188)'
    
}



