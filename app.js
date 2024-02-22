//OCULTAR/MOSTRAR MENU
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//CREACION DE BARRAS POR ID
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//SELECCION DE BARRAS
let html =document.getElementById("html");
crearBarra(html);
let javascript =document.getElementById("javascript");
crearBarra(javascript);
let css =document.getElementById("css");
crearBarra(css);
let react =document.getElementById("react");
crearBarra(react);

//CANTIDAD DE BARRAS AL INICIO
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
let entro = false;

//ANIMACION DE LAS BARRAS
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 17, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 16, 1, intervalJavascript);
        },100);
        const intervalcss = setInterval(function(){
            pintarBarra(css, 15, 2, intervalcss);
        },100);
        const intervalReact = setInterval(function(){
            pintarBarra(react, 14, 5, intervalReact);
        },100);
    }
}

//LLENAMOS LA BARRA CON LA CANTIDAD INDICADA
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#a52a2a";
    }else{
        clearInterval(interval)
    }
}

//DETECTAR SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA
window.onscroll = function(){
    efectoHabilidades();
}