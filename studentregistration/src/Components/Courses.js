import React, { useState } from 'react';

const Courses = ({ courses, setCourses }) => {
  const [newCourse, setNewCourse] = useState('');

  const addCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  const deleteCourse = (index) => {
    const updated = courses.filter((_, i) => i !== index);
    setCourses(updated);
  };

  return (
    <div>
      <h2>Courses</h2>
      <input
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Add Course"
      />
      <button onClick={addCourse}>Add</button>
      <ul>
        {courses.map((course, i) => (
          <li key={i}>
            {course}
            <button onClick={() => deleteCourse(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
