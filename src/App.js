import './App.css';

import React from "react";

import "./components/navBar/navBar";
import NavBar from "./components/navBar/navBar";

import IconConteiner from './components/iconConteiner/iconConteiner';
import ItemListContainer from './components/itemListContainer/itemListContainer';

const style ={
    style1:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-between',
        padding:'0px 100px ',
        margin:"10px",
    },
    style2:{
        backgroundColor:"lightgreen"
    },
    style3:{
        backgroundColor:"lightgoldenrodyellow"
    }

}

class App extends React.Component {
    render() {
        return ( <div className='div'style={style.style3} >
            <div style={style.style2} >
            <IconConteiner/>
            <NavBar />
            </div>
            <div style={style.style1}>
            <ItemListContainer
                    img='https://essential.vteximg.com.br/arquivos/ids/159243-1000-1000/04696_01.jpg?v=636610295657370000'
                    producto="Nike Air Force 1"
                    precio="$16000"
                    alt="Nike Air Force 1"
            />
            <ItemListContainer
                    img='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Zapatillas_Superstar_Blanco_EG4958_01_standard.jpg'
                    producto="Adidas SuperStar"
                    precio="$13000"
                    alt="Adidas SuperStar"
            />
            <ItemListContainer
                    img='https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc75a08fe/products/PU_367113-02/PU_367113-02-1.JPG'
                    producto="Puma Smash"
                    precio="$1000"
                    alt="Puma Smash"
            />
            <ItemListContainer
                    img='https://essential.vteximg.com.br/arquivos/ids/216189-1000-1000/431-0025_1.jpg?v=636840243552100000'
                    producto="Fila Disruptor"
                    precio="$9000"
                    alt="Fila Disruptor"
            />
            <ItemListContainer
                    img='https://d3ugyf2ht6aenh.cloudfront.net/stores/768/324/products/121211205810011-47d7c91ee9c3e2ef6316154726732827-1024-1024.jpg'
                    producto="Dc Pure"
                    precio="$11000"
                    alt="Dc Pure"
            />
            </div>
            </div>
            

        );
    }
}

export default App;
