import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Catalog.css'

function Catalog() {
    let products = [
        {
            title:'Shirt',
            category:'Clothing',
            price:1000,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE_UILeK918HhTFmaYgDEnMD4eeIytbwqZQ&s'
        },
        {
            title:'iPhone',
            category:'Technology',
            price:60000,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjQW6WJ8XIxcjTl5ZwnOPQwYOe6KPyXPVqQ&s'
        },
        {
            title:'Jeans',
            category:'Clothing',
            price:1000,
            image:'https://5.imimg.com/data5/SELLER/Default/2023/4/299958443/IU/JW/JF/24931053/img-20230409-151236-455.jpg'
        },
        {
            title:'Samsung Galaxy S24',
            category:'Technology',
            price:60000,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ576sK0V7Zi3KA2jMOtYHNiSkZoq3G2bFLA&s'
        }
    ]
    return (
        <div className="mt-4">
            <h1>Our Products</h1>
            <div className="textfield">
            <input type="text" className="textfieldbar" placeholder="Search Products"/>
            <div className="input-group-append">
                <button className="btn but" type="button">Search</button>
            </div>
            </div>
            
            <div className="mt-5">
            <div className="row gy-5 gx-3">
            {products.map((a)=><div className="col-sm-12 col-md-6 col-lg-6 mb-2"><ProductCard a={a}/></div>)}
            </div>

            </div>
        </div>
    )
}

export default Catalog
