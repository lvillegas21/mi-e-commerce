import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js/ItemDetailContainer';

const style ={
    style1:{
        display: 'flex',
        justifyContent: 'center',
        padding:'0px 100px ',
        margin:"10px",
        flexDirection:"column",
        alignItems:'center'
    },
    style2:{
        backgroundColor:"lightgreen"
    },
    style3:{
        backgroundColor:"lightgoldenrodyellow",
        heigth:"100%"
    }
}

const App=()=> {
   
        return ( <div className='div'style={style.style3} >
            <div style={style.style2} >
            <NavBar />
            </div>
            <div style={style.style1}>
            
            <ItemListContainer /> 

            <ItemDetailContainer />  
                     
            </div>
            </div>
        );
    
}

export default App;