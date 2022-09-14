const listaABC = ['1', '2', '99', '8000'];

const listaRenovada = [];

function cambiasion(elArray) {
    for(i = 0; i < elArray.length; i++) {
        listaRenovada.push( ' -'+elArray[i]  );
    }


}
console.log(listaRenovada);
cambiasion(listaABC);