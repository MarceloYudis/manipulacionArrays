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

  console.log("ordenes " + ordenes)
  const ordenesTotales = orders.map( item => { item.total })
  console.log("ordenes totales " + ordenesTotales)

 /* const ordenesNuevoAtrib = orders.map( item => {
    item.tax = .19;
    return item
  }) */




  const ordenesNuevoAtrib2 = orders.map( item => {

    return {
        ...item,
        tax: .19
    }
  })
  console.log(ordenesNuevoAtrib2);
  console.log(orders);