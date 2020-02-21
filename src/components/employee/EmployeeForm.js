import React, { useContext, useState, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider";


export default props => {
    const { locations } = useContext(LocationContext)
    const { addEmployee, employees, updateEmployee } = useContext(EmployeeContext)
    const [employee, setEmployee] = useState({})

    const editMode = props.match.params.hasOwnProperty("employeeId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newEmployee = Object.assign({}, employee)
        newEmployee[event.target.name] = event.target.value
        setEmployee(newEmployee)
    }

    const setDefaults = () => {
        if (editMode) {
            const employeeId = parseInt(props.match.params.employeeId)
            const selectedEmployee = employees.find(a => a.id === employeeId) || {}
            setEmployee(selectedEmployee)
        }
    }
useEffect(() =>{
}, [employee])

    useEffect(() => {
        setDefaults()
    }, [employees])

    const constructNewEmployee = () => {
        const locationId = parseInt(employee.locationId)


        
            if (editMode) {

                updateEmployee({
                    id: employee.id,
                    name: employee.name,
                    hourlyRate: employee.hourlyRate,
                    manager: employee.manager,
                    fulltime: employee.fulltime,
                    locationId: locationId,
                    userId: parseInt(localStorage.getItem("currentUser"))
                })
                    .then(() => props.history.push("/employees"))
            } else {

                addEmployee({
                    name: employee.name,
                    hourlyRate: employee.hourlyRate,
                    manager: employee.manager,
                    fulltime: employee.fulltime,
                    locationId: locationId,
                    userId: parseInt(localStorage.getItem("currentUser"))
                })
                    .then(() => props.history.push("/employees"))
            }
        
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{editMode ? "Update Employee" : "Add Employee"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        protype="varchar"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                        defaultValue={employee.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate: </label>
                    <input
                        type="text"
                        id="hourlyRate"
                        name="hourlyRate"
                        required
                        className="form-control"
                        placeholder="Hourly pay rate..."
                        defaultValue={employee.hourlyRate}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager: </label>
                    <input
                        type="text"
                        id="manager"
                        name="manager"
                        required
                        className="form-control"
                        placeholder="True or False"
                        defaultValue={employee.hourlyRate}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fulltime">Fulltime: </label>
                    <input
                        type="text"
                        id="fulltime"
                        name="fulltime"
                        required
                        className="form-control"
                        placeholder="True or False"
                        defaultValue={employee.fulltime}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select
                        name="locationId"
                        className="form-control"
                        proptype="int"
                        defaultValue={employee.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select an location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                     constructNewEmployee()
                }} 
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Add Employee"}            
            </button>
        </form>
    );
};