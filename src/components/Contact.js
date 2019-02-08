//Componente de presentación
import React from 'react'

const Contact = () => (
    <div>
        <p>Déjanos tu comentario y te responderemos mañana</p>
        <input 
            type="text" 
            name="nombre" 
            placeholder="Ingresa tu nombre" 
        />

        <input 
            type="text" 
            name="email" 
            placeholder="Tu correo electrónico" 
        />

        <input 
            type="number" 
            name="phone" 
            placeholder="Número telefónico" 
        />

        <textarea 
            name="mensaje" 
            rows="10" 
            cols="20" 
            placeholder="Escribe aqui tu mensaje" 
        />
        <button id="enviar_form">Enviar mensaje</button>
    </div>
)

export default Contact