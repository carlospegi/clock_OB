import React, { useEffect, useState } from 'react'


const Clock = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Carlos',
        apellidos: 'Perez',
        timerID: 0
    }

    const [state, setstate] = useState(initialState);


    useEffect(() => {
      state.timerID= setInterval(
            () => tick(), 1000
        );

    }, [state.timerID, tick, state]);

    //-----------------------------------------------------//

    useEffect(() => {

        return () => {
            clearInterval(state.timerID);
        };
    }, [state.timerID]);



    return (

        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )

    function tick() {
       setstate(
             {...state,
                edad: state.edad + 1,
                fecha: new Date(),

            }
        )
    }
}

export default Clock
