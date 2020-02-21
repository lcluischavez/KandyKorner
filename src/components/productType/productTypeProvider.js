import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const productTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductTypeProvider = (props) => {
    const [producttypes, setproductTypes] = useState([])

    const getproductTypes = () => {
        return fetch("http://localhost:8088/producttypes")
            .then(res => res.json())
            .then(setproductTypes)
    }

    const addproductType = producttype => {
        return fetch("http://localhost:8088/producttypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producttype)
        })
            .then(getproductTypes)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getproductTypes()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [producttypes])

    return (
        <productTypeContext.Provider value={{
            producttypes, addproductType
        }}>
            {props.children}
        </productTypeContext.Provider>
    )
}