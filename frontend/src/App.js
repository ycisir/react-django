import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [students, setStudents] = useState([])

  useEffect(()=>{
    async function getAllStudent(){
      try{
        // remember to add / at last
        const students = await axios.get('http://127.0.0.1:8000/api/student/')
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])

  return (
    <div className="App">
      <h1>Connect ReactJS to Django</h1>
      {
        students.map((student, i)=>{
          return (
            <p key={i}>Name: {student.name},  Email: {student.email}</p>
          )
        })
      }
    </div>
  );
}

export default App;
