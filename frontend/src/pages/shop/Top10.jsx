import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from "../../data/products.json"

const Top10 = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts =()=>{
        setVisibleProducts(prevCount => prevCount+4)
    }
  return (
    <section className='section__container product__container'>
        <h2 className='headerr'>Popular menu</h2>
        {/* <p className='section__subheaderr__left '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nam autem nemo fuga esse quidem quisquam, doloremque reprehenderit sit blanditiis, 
          numquam eos assumenda accusamus dolores similique? Magni, porro at. Omnis?
        </p> */}

        {/* product card */}
        <div className='mt-12 '>
          <ProductCards products ={products.slice(0,visibleProducts)} ></ProductCards>
        </div>
        
        {/* load more product btn */}
        <div className='product__btn '>
          {
            visibleProducts < products.length && (
              <button className='btn' onClick={loadMoreProducts}>Load more</button>
            )
          }
        </div>
        
        
    </section>
  )
}


export default Top10