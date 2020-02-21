import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import LocationList from "./location/LocationList"
import ProductList from "./product/ProductList"
import { ProductTypeProvider } from "./productType/productTypeProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"



export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/locations */}
                <Route
                    exact
                    path="/"
                    render={props => <LocationList {...props} />}
                />
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>
                    {/* Render the product list when http://localhost:3000/products */}
                    <Route
                    exact
                    path="/products"
                    render={props => <ProductList {...props} />}
                />
                </ProductTypeProvider>
            </ProductProvider>

            <EmployeeProvider>
                <LocationProvider>
                    {/* Render the employee list when http://localhost:3000/employees */}
                    <Route
                        exact
                        path="/employees"
                        render={props => <EmployeeList {...props} />}
                    />
                    <Route
                        exact
                        path="/employees/add-employee"
                        render={props => <EmployeeForm {...props} />}
                    />
                    <Route
                        exact
                        path="/employees/edit/:employeeId(\d+)"
                        render={props => <EmployeeForm {...props} />}
                    />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}