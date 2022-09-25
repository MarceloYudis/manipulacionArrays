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