import React from 'react'


const style = {    
    cont:{
        height: "330px",
        width: "210px",
        padding: "3px",
        margin: "10px 0px",
        borderStyle:"solid",
        borderRadius:"2%"
    },
    imagen:{
        width:"200px",
        height:"200px",
        borderStyle:"solid",
        borderRadius:"2%"

    }
}

const itemListContainer =({producto,precio,img})=>{
    return(
        <div style={style.seccion}>
            <div style={style.cont}>
                <img src={img} alt="producto" style={style.imagen}/>
                <h4>{producto}</h4>
                <p>{precio}</p>
                <button className="btn btn-outline-success">Comprar</button>
            </div>
        </div>
    )
}

export default itemListContainer;