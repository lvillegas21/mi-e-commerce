import React from 'react'

class navBar extends React.Component {
    render() {
        return ( <nav> <ul className = "nav justify-content-center">
            <li className = "nav-item" >
            <a className = "nav-link active" > inicio </a> </li>
            <li className = "nav-item">
            <a className = "nav-link" > productos </a> </li>
            <li className = "nav-item" >
            <a className = "nav-link" > ofertas </a> </li>
            <li className = "nav-item" >
            <a className = "nav-link" > contacto </a> </li>          
            </ul> </nav>
        )
    }
}

export default navBar;