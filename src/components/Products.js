import React, { Component } from 'react'
import Product from './Product'

class Products extends Component {

    constructor(props){
        super(props)
        this.state = {
        productos:  [
            {
            nombre: "Paracetamol",
            caducidad: "Enero 2020",
            sustancia: "Cocaina",
            contenido: "10 pastillas de 20 mg",
            precio: "$20.00",
            imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg"
            },
            {
                nombre: "Loratadina",
                caducidad: "Enero 2030",
                sustancia: "Metanfetamina",
                contenido: "30 pastillas de 15 mg",
                precio: "$50.00",
                imagen: "https://www.farmalisto.com.mx/43258-thickbox_default/compra-loratadina-10-mg-caja-con-20-tabletas-precio-7502209851160.jpg"
            },
            {
                nombre: "Omeprazol",
                caducidad: "Septiembre 2021",
                sustancia: "Mágica para el estómago",
                contenido: "20 pastillas de 20 mg",
                precio: "$40.00",
                imagen: "https://www.superama.com.mx/Content/images/products/img_large/0750164475129L.jpg"
            },
        ]
        }
    }

    render() {
        return (
            <div>
            <h1>Productos disponibles</h1>
            {
                this.state.productos.map((producto, index) => (
                    <div key={index}>
                    <h3>{producto.nombre}</h3>
                    <img src={producto.imagen} alt={producto.nombre} width="100" height="100" />
                    <p>{producto.precio}</p>
                    
                    <p>--------------------------------------------</p>

                    <Product p={producto} />
                    </div>
                ))
            }
            </div>
        )
    }
}

export default Products
