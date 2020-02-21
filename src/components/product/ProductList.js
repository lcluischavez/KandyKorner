import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Products.css"
import { productTypeContext } from "../productType/productTypeProvider"


export default () => {
    const { products } = useContext(ProductContext)
    const { producttypes } = useContext(productTypeContext)

    return (
        <>
            <h1>Products</h1>
            <div className="products">
                {
                    products.map(product => {
                        const type = producttypes.find(c => c.id === product.productTypeId)
                    
                        return <Product key={product.id}
                                    productType={type}
                                    product={product} />
                    })
                }
            </div>
        </>
    )
}