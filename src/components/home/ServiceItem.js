import React from 'react'

const ServiceItem = ({ img, title, children, aosDelay }) => {
  return (
    <div data-aos='fade-down' data-aos-delay={aosDelay} className='service'>
      <div className='img mb-3'>img</div>
      <h3 className='mb-3'>{title}</h3>
      <div className='service-description mb-3'>{children}</div>
    </div>
  )
}

export default ServiceItem
