import React from "react"
import "./Products.css"

export default ({ product , productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">Product Type: {productType.name}</div>

    </section>
)

