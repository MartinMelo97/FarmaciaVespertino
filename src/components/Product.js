import React from 'react'

const Product = (props) => (
    <div className="product-card">
                <h2>{props.p.nombre}</h2>
                <p>Caduca en: {props.p.caducidad}</p>
                <p>Contiene: {props.p.sustancia}</p>
                <p>Contenido: {props.p.contenido}</p>
                <h3>{props.p.precio}</h3>
                <img 
                    src={props.p.imagen} 
                    alt="paracetamol" 
                    width="100" 
                    height="100" 
                />
            </div>
)

export default Product