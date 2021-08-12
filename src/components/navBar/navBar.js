import React from 'react'


const estilo = {
    contenedor:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-around',
    },
}
const navBar = () => {

        return ( <div style={estilo.contenedor}> 
                    <h3>Sneakerz</h3>
                </div>
        )
    }


export default navBar;