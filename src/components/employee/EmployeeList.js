import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employees.css"
import { LocationContext } from "../location/LocationProvider"


export default (props) => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="employeeSec">
            <h1>Employees</h1>
                <button onClick={() => props.history.push("/employees/add-employee")}>
                    Add Employee
                </button>
                <article className="employeeList">
                    {
                        employees.map(employee => {
                            const place = locations.find(loc => loc.id === employee.locationId)
                            return <Employee key={employee.id}
                                        location={place}
                                        employee={employee} {...props}/>
                        })
                    }
                </article>
        </div>
    )
}