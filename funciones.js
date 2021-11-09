window.sr = ScrollReveal();
sr.reveal('#txt', {   //se puede utilizar solo si tiene id o div(con un id) o una clase
    duration: 3000,
    origin: 'right',
    distance: '100px'
});




function no_drama(){
document.getElementById("img").src="img/triste.png";
}
function drama(){
    document.getElementById("img").src="img/feliz..png";
    }
    
function cambiar_morado(){
    document.getElementById("fondo").style.backgroundColor="purple"
}
function cambiar_dorado(){
    document.getElementById("fondo").style.backgroundColor="gold";
}
function predeterminado(){
    document.getElementById("fondo").style.backgroundColor="white";

}


function agregar(){
    var lista = document.getElementById("lista");
    var dato = document.getElementById("dato").value;
    var li = document.createElement(li);
    li.textContent= dato;
    lista.appendChild(li);
    document.getElementById("dato").value="";
}

function eliminar(){
    var lista = document.getElementById("lista");
    lista.removeChild(lista.lastElementChild);
}








