import React, { useState } from 'react';

const CourseTypes = ({ courseTypes, setCourseTypes }) => {
    const [newType, setNewType] = useState('');
  
    const addCourseType = () => {
      if (newType.trim()) {
        setCourseTypes([...courseTypes, newType]);
        setNewType('');
      }
    };
  
    const deleteCourseType = (index) => {
      const updated = courseTypes.filter((_, i) => i !== index);
      setCourseTypes(updated);
    };
  
    return (
      <div>
        <h2>Course Types</h2>
        <input
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          placeholder="Add Course Type"
        />
        <button onClick={addCourseType}>Add</button>
        <ul>
          {courseTypes.map((type, i) => (
            <li key={i}>
              {type}
              <button onClick={() => deleteCourseType(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default CourseTypes;