import React, { useState } from 'react';
import './App.css';

import CourseTypes from './Components/CourseTypes';
import Courses from './Components/Courses';
import Offerings from './Components/CourseOfferings'; 
import Students from './Components/StudentRegistration';

function App() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);

  return (
    <div className="App">
      <h1>Student Registration System</h1>

      <CourseTypes
        courseTypes={courseTypes}
        setCourseTypes={setCourseTypes}
      />

      <Courses
        courses={courses}
        setCourses={setCourses}
      />

      <Offerings
        courseTypes={courseTypes}
        courses={courses}
        offerings={offerings}
        setOfferings={setOfferings}
      />

      <Students
        offerings={offerings}
      />
    </div>
  );
}

export default App;


