import React, { useState } from 'react';

const Offerings = ({ courseTypes, courses, offerings, setOfferings }) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const createOffering = () => {
    if (selectedType && selectedCourse) {
      const newOffering = `${selectedType} - ${selectedCourse}`;
      if (!offerings.includes(newOffering)) {
        setOfferings([...offerings, newOffering]);
      }
    }
  };

  const deleteOffering = (index) => {
    const updated = offerings.filter((_, i) => i !== index);
    setOfferings(updated);
  };

  return (
    <div>
      <h2>Course Offerings</h2>

      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Select Course Type</option>
        {courseTypes.map((type, i) => (
          <option key={i} value={type}>{type}</option>
        ))}
      </select>

      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course, i) => (
          <option key={i} value={course}>{course}</option>
        ))}
      </select>

      <button onClick={createOffering}>Create Offering</button>

      <ul>
        {offerings.map((offering, i) => (
          <li key={i}>
            {offering}
            <button onClick={() => deleteOffering(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offerings;
