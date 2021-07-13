import React from 'react'

const ServiceItem = ({ img, title, children }) => {
  return (
    <div className='service'>
      <div className='img'>img</div>
      <h3>{title}</h3>
      <div className='service-description'>{children}</div>
    </div>
  )
}

export default ServiceItem
