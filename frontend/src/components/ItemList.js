import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './itemlist.css';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div className="item-list-container">
        <h1>Items</h1>
        <ul className="item-list">
            {items.map(item => (
                <li key={item.id} className="item">
                    <h2>Personal Information</h2>
                    <div className="item-header">
                        <span className="item-label">Name:</span> 
                        <span className="item-value">{item.first_name} {item.middle_name} {item.last_name}</span>
                    </div>
                    <div className="item-details">
                        <div>
                            <span className="item-label">Address:</span> 
                            <span className="item-value">{item.address}</span>
                            <br />
                            <span className="item-label">Permanent Address:</span> 
                            <span className="item-value">{item.permanent_address}</span>
                            <br />
                            <span className="item-label">Zip Code:</span> 
                            <span className="item-value">{item.zip_code}</span>
                            <br />
                            <span className="item-label">Email:</span> 
                            <span className="item-value">{item.email}</span>
                            <br />
                            <span className="item-label">Phone:</span> 
                            <span className="item-value">{item.phone}</span>
                            <br />
                            <span className="item-label">Date of Birth:</span> 
                            <span className="item-value">{item.date_of_birth}</span>
                            <br />
                            <span className="item-label">Place of Birth:</span> 
                            <span className="item-value">{item.place_of_birth}</span>
                            <br />
                            <span className="item-label">Civil Status:</span> 
                            <span className="item-value">{item.civil_status}</span>
                            <br />
                            <span className="item-label">Sex:</span> 
                            <span className="item-value">{item.sex === 'M' ? 'Male' : 'Female'}</span>
                            <br />
                            <span className="item-label">Height:</span> 
                            <span className="item-value">{item.height}</span>
                            <br />
                            <span className="item-label">Weight:</span> 
                            <span className="item-value">{item.weight}</span>
                            <br />
                            <span className="item-label">Blood Type:</span> 
                            <span className="item-value">{item.bloodtype}</span>
                            <br />
                            <span className="item-label">Citizenship:</span> 
                            <span className="item-value">{item.citizenship}</span>
                            <br />
                            <span className="item-label">GSIS:</span> 
                            <span className="item-value">{item.gsis}</span>
                            <br />
                            <span className="item-label">Pag-Ibig No:</span> 
                            <span className="item-value">{item.pag_ibig_no}</span>
                            <br />
                            <span className="item-label">PhilHealth:</span> 
                            <span className="item-value">{item.philhealth}</span>
                            <br />
                            <span className="item-label">SSS:</span> 
                            <span className="item-value">{item.sss}</span>
                            <br />
                            <span className="item-label">TIN:</span> 
                            <span className="item-value">{item.tin}</span>
                            <br />
                            <span className="item-label">Agency Employee No:</span> 
                            <span className="item-value">{item.agency_employee_no}</span>
                            <br />
                            <span className="item-label">Occupation:</span> 
                            <span className="item-value">{item.occupation}</span>
                            <br />
                            <span className="item-label">Employee Business:</span> 
                            <span className="item-value">{item.employee_business}</span>
                            <br />
                            <span className="item-label">Business Address:</span> 
                            <span className="item-value">{item.business_address}</span>
                        </div>
                    </div>
                    <div className="educational-background">
                        <h2>Educational Background</h2>
                        <div>
                            <span className="item-label">Elementary School:</span>
                            <span className="item-value">{item.elementary_school}</span>
                            <br />
                            <span className="item-label">Degree:</span>
                            <span className="item-value">{item.elementary_degree}</span>
                            <br />
                            <span className="item-label">Period:</span>
                            <span className="item-value">{item.elementary_period_from} - {item.elementary_period_to}</span>
                            <br />
                            <span className="item-label">Highest Level:</span>
                            <span className="item-value">{item.elementary_highest_level}</span>
                            <br />
                            <span className="item-label">Year Graduated:</span>
                            <span className="item-value">{item.elementary_year_graduated}</span>
                            <br />
                            <span className="item-label">Academic Honors:</span>
                            <span className="item-value">{item.elementary_academic_honors}</span>
                        </div>
                        <div>
                            <span className="item-label">Secondary School:</span>
                            <span className="item-value">{item.secondary_school}</span>
                            <br />
                            <span className="item-label">Degree:</span>
                            <span className="item-value">{item.secondary_degree}</span>
                            <br />
                            <span className="item-label">Period:</span>
                            <span className="item-value">{item.secondary_period_from} - {item.secondary_period_to}</span>
                            <br />
                            <span className="item-label">Highest Level:</span>
                            <span className="item-value">{item.secondary_highest_level}</span>
                            <br />
                            <span className="item-label">Year Graduated:</span>
                            <span className="item-value">{item.secondary_year_graduated}</span>
                            <br />
                            <span className="item-label">Academic Honors:</span>
                            <span className="item-value">{item.secondary_academic_honors}</span>
                        </div>
                        <div>
                            <span className="item-label">Vocational School:</span>
                            <span className="item-value">{item.vocational_school}</span>
                            <br />
                            <span className="item-label">Degree:</span>
                            <span className="item-value">{item.vocational_degree}</span>
                            <br />
                            <span className="item-label">Period:</span>
                            <span className="item-value">{item.vocational_period_from} - {item.vocational_period_to}</span>
                            <br />
                            <span className="item-label">Highest Level:</span>
                            <span className="item-value">{item.vocational_highest_level}</span>
                            <br />
                            <span className="item-label">Year Graduated:</span>
                            <span className="item-value">{item.vocational_year_graduated}</span>
                            <br />
                            <span className="item-label">Academic Honors:</span>
                            <span className="item-value">{item.vocational_academic_honors}</span>
                        </div>
                        <div>
                            <span className="item-label">College School:</span>
                            <span className="item-value">{item.college_school}</span>
                            <br />
                            <span className="item-label">Degree:</span>
                            <span className="item-value">{item.college_degree}</span>
                            <br />
                            <span className="item-label">Period:</span>
                            <span className="item-value">{item.college_period_from} - {item.college_period_to}</span>
                            <br />
                            <span className="item-label">Highest Level:</span>
                            <span className="item-value">{item.college_highest_level}</span>
                            <br />
                            <span className="item-label">Year Graduated:</span>
                            <span className="item-value">{item.college_year_graduated}</span>
                            <br />
                            <span className="item-label">Academic Honors:</span>
                            <span className="item-value">{item.college_academic_honors}</span>
                        </div>
                        <div>
                            <span className="item-label">Graduate School:</span>
                            <span className="item-value">{item.graduate_school}</span>
                            <br />
                            <span className="item-label">Degree:</span>
                            <span className="item-value">{item.graduate_degree}</span>
                            <br />
                            <span className="item-label">Period:</span>
                            <span className="item-value">{item.graduate_period_from} - {item.graduate_period_to}</span>
                            <br />
                            <span className="item-label">Highest Level:</span>
                            <span className="item-value">{item.graduate_highest_level}</span>
                            <br />
                            <span className="item-label">Year Graduated:</span>
                            <span className="item-value">{item.graduate_year_graduated}</span>
                            <br />
                            <span className="item-label">Academic Honors:</span>
                            <span className="item-value">{item.graduate_academic_honors}</span>
                        </div>
                    </div>
                    <div className="button-group">
                        <button className="edit" onClick={() => onEdit(item)}>Edit</button>
                        <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    
    
);
};

export default ItemList;