import React, { useState } from 'react';

const Students = ({ offerings }) => {
  const [selectedOffering, setSelectedOffering] = useState('');
  const [studentName, setStudentName] = useState('');
  const [registrations, setRegistrations] = useState([]);

  const registerStudent = () => {
    if (selectedOffering && studentName.trim()) {
      const newEntry = {
        name: studentName,
        offering: selectedOffering
      };
      setRegistrations([...registrations, newEntry]);
      setStudentName('');
    }
  };

  // Filter registrations for the selected offering
  const filteredRegistrations = registrations.filter(
    (r) => r.offering === selectedOffering
  );

  return (
    <div>
      <h2>Student Registrations</h2>

      <select
        value={selectedOffering}
        onChange={(e) => setSelectedOffering(e.target.value)}
      >
        <option value="">Select Offering</option>
        {offerings.map((off, i) => (
          <option key={i} value={off}>
            {off}
          </option>
        ))}
      </select>

      <input
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Student Name"
      />

      <button onClick={registerStudent}>Register</button>

      <h3>Registered Students</h3>
      <ul>
        {filteredRegistrations.map((reg, i) => (
          <li key={i}>{reg.name} registered for {reg.offering}</li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
