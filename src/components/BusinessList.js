import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessList = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/businesses')
            .then(res => setBusinesses(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>       

            <div className="container mt-4">
               <h2>Businesses</h2>
               <table className="table table-striped">
                 <thead>
                   <tr>
                   <th scope="col">Sr.No</th>
                   <th scope="col">Name</th>
                   <th scope="col">Description</th>
                   </tr>
                  </thead>
                 <tbody>
                    {businesses.map((business, index) => (
                     <tr key={business.id}>
                     <th scope="row">{index + 1}</th>
                     <td>{business.name}</td>
                     <td>{business.description}</td>
                    </tr>
                        ))}
                  </tbody>
          </table>
        </div>
        </div>

    );
};

export default BusinessList;
