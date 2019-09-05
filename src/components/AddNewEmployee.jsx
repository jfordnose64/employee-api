import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddNewEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isFullTime, setFullTime] = useState('')
  const [jobTitle, setJobTitle] = useState('')

  const addEmployee = async () => {
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/twisser/Employees',
      {
        firstName,
        lastName,
        isFullTime,
        jobTitle
      }
    )
  }

  // useEffect(() => {
  //   addEmployee()
  // }, [])

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addEmployee()
        }}
      >
        <section>
          <label>First Name</label>
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </section>
        <section>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Smith"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </section>
        <section>
          <label>Full Time?</label>
          <input
            type="drop-down"
            placeholder="123"
            value={isFullTime}
            onChange={e => setFullTime(e.target.value)}
          />
        </section>
        <section>
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Manager"
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
          />
        </section>
        <button>Add Employee</button>
      </form>
    </div>
  )
}

export default AddNewEmployee
