import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [employee, setEmployee] = useState([])

  const fetchCompany = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/twisser'
    )
    setEmployee(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchCompany()
  }, [])

  return (
    <div>
      <h4>Don't forget to add yourself!</h4>
    </div>
  )
}

export default HomePage
