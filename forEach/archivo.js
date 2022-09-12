const comida = [
    { nombre:'Empanada', price: 121},
    { nombre:'Pizza', price: 20}
]

const parrafoHtml = document.getElementById('main');

comida.forEach( producto => {
    parrafoHtml.innerHTML += `<li> ${producto.nombre} </li>`;
})

const actividades = [
    {tarea: 'Lavar la ropa'},
    {tarea: 'Comprar la despensa'}
]

const listadoHtml = document.getElementById('listaTareas');

let completasion = actividades.forEach( unaActividad => {
    listadoHtml.innerHTML += ` <p><input type="checkbox">${unaActividad.tarea}  </p>`
})