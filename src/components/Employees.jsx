import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const resp = await Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/twisser'
    )
    console.log(resp.data)
    setEmployees(resp.data)
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div>
      <nav>
        <ul>
          {employees.map(employee => {
            return (
              <li>
                <h3>{employee.firstName}</h3>
                <p>{employee.jobTitle}</p>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Employees
