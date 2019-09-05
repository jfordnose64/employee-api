import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Employees = props => {
  const [employeeData, setEmployeeData] = useState('')

  const fetchEmployeeData = async () => {
    const resp = await Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/twisser/Employees/${props.match.params.employee}`
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  useEffect(() => {
    fetchEmployeeData()
  }, [])
  return (
    <div>
      <h2>First Name: {employeeData.firstName}</h2>
      <h3>Last Name: {employeeData.lastName}</h3>
      <p>Job Title: {employeeData.jobTitle}</p>
      <p>Email: {employeeData.email}</p>
      <p>Phone Number: {employeeData.phoneNumber}</p>
    </div>
  )
}

export default Employees
