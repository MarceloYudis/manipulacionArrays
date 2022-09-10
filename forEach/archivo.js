const comida = [
    { nombre:'Empanada', price: 121},
    { nombre:'Pizza', price: 20}
]

const parrafoHtml = document.getElementById('main');

comida.forEach( producto => {
    parrafoHtml.innerHTML += `<li> ${producto.nombre} </li>`;
})