let InputsHeadersCorte = Array.from(document.querySelectorAll('.longInputs'))
let containerCortes = document.getElementById('listaCorte')
let botonAgregar = document.getElementById('botonAgregar')
let plantillaCortes = ""


function validar_corte() {
    console.log('validó corte')
    
};

let crearPlantilla = function (){

    return `
    <div class="longClass">
        <div>              
            <input type="text" class="longInputs" value="${InputsHeadersCorte[0].value}" disabled>
        </div>
        <div>
            <input type="number" class="longInputs" value="${InputsHeadersCorte[1].value}" disabled>
        </div>
        <div>
            <input type="number" class="longInputs" value="${InputsHeadersCorte[2].value}" disabled>
        </div>
        <div>
            <span>X</span>
        </div>
    </div>
    `
};

function agregar_corte() {

    containerCortes.innerHTML += crearPlantilla()

    InputsHeadersCorte.forEach(function(element){
        element.value = ""
    })
 
};

botonAgregar.onclick = function(){
    validar_corte();
    agregar_corte()

}

