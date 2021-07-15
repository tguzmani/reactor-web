import React from 'react'
import ServiceItem from './ServiceItem'

const Services = () => {
  return (
    <div id='services'>
      <div className='container'>
        <ServiceItem title='Landing Page' aosDelay={0}>
          Preséntate ante tu público de una forma profesional y aumenta tus
          ventas
        </ServiceItem>

        <ServiceItem title='Ecommerce' aosDelay={100}>
          Automatiza y gestiona tus ventas con una herramienta de Ecommerce
        </ServiceItem>

        <ServiceItem title='Aplicaciones a la talla' aosDelay={200}>
          ¿Necesitas algo muy específico? Desarrollamos aplicaciones a la talla,
          según tus necesidades
        </ServiceItem>
      </div>
    </div>
  )
}

export default Services
