const form = document.querySelector('#form');

const nombre = form.nombre
const correo = form.correo
const telefono = form.telefono

let errors = document.querySelector('.errors');

form.addEventListener('submit', validar)

function validar(e) {
    errors.innerHTML = ''
    validarNombre(e)
    validarCorreo(e)
    validarTelefono(e)
}

function validarNombre(e) {
    if(nombre.value == '' || nombre.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingresa Nombre<li>'
        e.preventDefault()
    }
}

function validarCorreo(e) {
    if(correo.value == '' || correo.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingresa Correo<li>'
        e.preventDefault()
}  else {
    if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value)) {

    } else {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingresa correo valido</li>'
        e.preventDefault()
    }
  }   
}

function validarTelefono(e) {
    if(telefono.value == '' || telefono.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingresa Telefono<li>'
        e.preventDefault()
    }
}