import React from 'react'
import categories1 from "../../assets/chick.png"
import categories2 from "../../assets/Chocolate-ice-cream.jpg"
import categories3 from "../../assets/milkshake.jpg"
import categories4 from "../../assets/milkshake.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name: "Chickens",path:"Chickens",image: categories1},
        {name: "Snacks",path:"Snacks",image: categories2},
        {name: "Drinks",path:"Drinks",image: categories3},
        {name: "etc.",path:"etc",image: categories4},

    ]
  return (
    <div className='product__grid  '>
        {
            categories.map((category)=>(
                <Link key={category.name}to = {`/categories/${category.path}` } className= 'categories__card '>
                    <img src={category.image} alt="category.name" />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }
    </div>
  )
}

export default Categories