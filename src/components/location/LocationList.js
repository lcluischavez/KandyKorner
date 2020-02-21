import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"
import { EmployeeContext } from "../employee/EmployeeProvider"

export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <>
            <h1>Locations</h1>
            <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
            </div>
        </>
    )  
}