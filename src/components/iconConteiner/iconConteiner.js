import React from 'react'
import img from './icon.png'

const estilo = {
    contenedor:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-around',
        padding:'5px'
    },
}


const iconConteiner =()=>{
    return(
        <div style={estilo.contenedor}>
            <img src={img} alt='zapatilla'/>
        </div>
    );
}

export default iconConteiner;

