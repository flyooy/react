import { useState } from 'react';
import './App.css'; 

function App() {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');


  const [submittedName, setSubmittedName] = useState('');
  const [submittedAge, setSubmittedAge] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedName(name); 
    setSubmittedAge(age);   
  };

  return (
    <div className="container">
      <h1>Formular mit useState</h1>

  
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>

     
      {submittedName && submittedAge && (
        <div className="result">
          <h2>Ubermittelte Daten:</h2>
          <p>Name: {submittedName}</p>
          <p>Alter: {submittedAge}</p>
        </div>
      )}
    </div>
  );
}

export default App;