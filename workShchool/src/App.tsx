import "./App.css"
import { NavBar } from "./common/NavBar"
import { Home } from "./components/Home"

import { StudentView } from "./components/StudentView"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AddStudent } from "./student/AddStudent"
import { EditStudent } from "./student/EditStudent"
import { StudentProfile } from "./student/StudentProfile"

export function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view-students" element={<StudentView />}></Route>
          <Route path="/add-student" element={<AddStudent />}></Route>
          <Route path="/edit-student/:id" element={<EditStudent />}></Route>
          <Route
            path="/profile-student/:id"
            element={<StudentProfile />}
          ></Route>
        </Routes>
      </Router>
    </main>
  )
}
