const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const estaSobrepuesta = (newDAte) => {
    return dates.some( date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDAte.startDate, end: newDAte.endDate}
        )
    })
  };

  const obj1 = {
    startDate: new Date(2023, 1, 1, 10),
    endDate: new Date(2023, 1, 1, 11),
    title: "Cita de trabajo",
}


console.log(estaSobrepuesta(obj1));