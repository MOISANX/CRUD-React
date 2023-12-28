import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export function EditStudent() {
  const navigate = useNavigate()

  const { id } = useParams()
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departament: "",
  })

  const { firstName, lastName, email, departament } = student
  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {
    const result = await axios.get(
      `http://localhost:8080/student/student/${id}`
    )
    setStudent(result.data)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const updateStudent = async (e: React.FormEvent) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/student/update/${id}`, student)
    navigate("/view-students")
  }

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2>Edit User</h2>
      <form onSubmit={(e) => updateStudent(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="departament">
            Departament
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="departament"
            id="departament"
            required
            value={departament}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
