import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. These websites allow businesses to showcase their products or services, and customers can browse, select, and purchase items through online transactions. E-commerce websites come in various forms and sizes, catering to different types of businesses and industries.
        </p>
        <p>
        E-commerce websites have become integral for businesses looking to reach a broader audience, increase sales, and adapt to changing consumer preferences in the digital age.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
