import React, { useState, useEffect } from 'react';

const ApiDataLoader = () => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
       
        const fetchData = async () => {
          try {
           
            setLoading(true);
            
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/14');
            
            if (!response.ok) {
              throw new Error('Netzwerkantwort war nicht ok');
            }
          
            const result = await response.json();
          
            setData(result);
          } catch (error) {
            
            setError(error.message);
          } finally {
           
            setLoading(false);
          }
        };
    
        
        fetchData();
      }, []); 
    
      
      if (loading) {
        return <div>Lädt…</div>;
      }
    
      
      if (error) {
        return <div>Fehler: {error}</div>;
      }
    
      
      return (
        <div>
          {data ? (
            <div>
              <h3>To-Do Aufgabe</h3>
              <p>ID: {data.id}</p>
              <p>Titel: {data.title}</p>
              <p>Status: {data.completed ? 'Fertig' : 'Unvollständig'}</p>
            </div>
          ) : (
            <div>Keine Daten verfügbar.</div>
          )}
        </div>
      );
    };
    
    export default ApiDataLoader;