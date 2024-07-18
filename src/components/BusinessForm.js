import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


const BusinessForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
const navigate = useNavigate();   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/businesses', formData)
            .then(res => {
            navigate('/business-List');
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Business Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    );
};

export default BusinessForm;
