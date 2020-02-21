import React, { useContext } from "react"
import "./Employees.css"
import { EmployeeContext } from "./EmployeeProvider"

export default ({ employee, location, history, props }) => {
    const { employees, deleteEmployee } = useContext(EmployeeContext)

    return(
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
        <div className="employee__fulltime">
            Fulltime: {employee.fulltime === true ? "Yes" : "Partime"}
        </div>
        <div className="employee__manager">
            Manager: {employee.manager === true ? "Yes" : "No"}
        </div>
        <div className="employee__hourlyRate">HourlyRate: ${employee.hourlyRate}</div>
        <button className="btn--delete"
                onClick={() => {
                deleteEmployee(employee)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
        </button>
        <button
            onClick={() => {
                history.push(`/employees/edit/${employee.id}`);
            }}
            >
            Edit
        </button>
    </section>

)}


