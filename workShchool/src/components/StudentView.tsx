import axios from "axios"
import { useEffect, useState } from "react"
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"

interface Student {
  id: string
  firstName: string
  lastName: string
  email: string
  departament: string
}

export function StudentView() {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/student/", {
      validateStatus: () => {
        return true
      },
    })
    if (result.status === 302) {
      setStudents(result.data)
    }
  }

  const handleDelete = async (id: string) => {
    await axios.delete(`http://localhost:8080/student/delete/${id}`)
    loadStudents()
  }

  return (
    <section>
      
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {students.map((student, index) => (
            <tr key={student.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>

              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.departament}</td>
              <td className="mx-2">
                <Link
                  to={`/profile-student/${student.id}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-student/${student.id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
