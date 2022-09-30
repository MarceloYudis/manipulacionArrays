const cadena = ['tomas','celeste','ramirez','candida','curcuma']

const filtrado = cadena.filter( item=> item.lenght < 6);

console.log(filtrado)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: false
    },
  ]

const filtrado2 = orders.filter( item=> {
    item.delivered
});

console.log(filtrado2);

const search = (query) => {
    return orders.filter( item => {
        return item.customerName.includes(query)
    })
};
console.log( search('u'))

//
const garana = [1, 2, 2, 3];

const result = garana.reduce( (obj,item) => {
  if(!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
},{} )

//
const pruebaArray = [1,3,5,7,8,10,11,4,2,2,2,3]

const conjunto = pruebaArray.reduce((res, pA) => {
   


  
  return res;
},{});

console.log(conjunto)