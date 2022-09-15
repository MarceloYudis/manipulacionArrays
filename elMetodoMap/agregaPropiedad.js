const listinnia = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
    
  ];

const arrayDeProductos = listinnia.map( item => {
    let impuestazo = parseInt( item.price * 0.19);
    item.impuestazo = impuestazo;
    console.log("item objeto" + item);

    return item;

});

console.log( arrayDeProductos);

/*
  let objetoDelArray = listinnia[0];

  let impuestazo = parseInt(objetoDelArray.price * 0.19);

    const listinniaBurocratica = [];
    objetoDelArray.impuestazo = impuestazo;

    listinniaBurocratica.push( objetoDelArray); 
*/

function solution(listinnia) {
    return listinnia.map( item => ({
        ...item,
        taxes: Math.trunc( item.price * 0.19)
    }))
};