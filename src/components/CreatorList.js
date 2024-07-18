import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatorList = () => {
    const [ creators , setcreators ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/creators ')
            .then(res => setcreators (res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            
            
            <div className="container mt-4">
      <h2>Creators</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {creators.map((creator, index) => (
            <tr key={creator.id}>
              <th scope="row">{index + 1}</th>
              <td>{creator.name}</td>
              <td>{creator.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
        
    );
};

export default CreatorList;
