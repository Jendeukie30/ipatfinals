import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './itemform.css';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodtype, setBloodtype] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [gsis, setGsis] = useState('');
    const [pagIbigNo, setPagIbigNo] = useState('');
    const [philhealth, setPhilhealth] = useState('');
    const [sss, setSss] = useState('');
    const [tin, setTin] = useState('');
    const [agencyEmployeeNo, setAgencyEmployeeNo] = useState('');
    const [occupation, setOccupation] = useState('');
    const [employeeBusiness, setEmployeeBusiness] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [elementarySchool, setElementarySchool] = useState('');
    const [elementaryDegree, setElementaryDegree] = useState('');
    const [elementaryPeriodFrom, setElementaryPeriodFrom] = useState('');
    const [elementaryPeriodTo, setElementaryPeriodTo] = useState('');
    const [elementaryHighestLevel, setElementaryHighestLevel] = useState('');
    const [elementaryYearGraduated, setElementaryYearGraduated] = useState('');
    const [elementaryAcademicHonors, setElementaryAcademicHonors] = useState('');
    const [secondarySchool, setSecondarySchool] = useState('');
    const [secondaryDegree, setSecondaryDegree] = useState('');
    const [secondaryPeriodFrom, setSecondaryPeriodFrom] = useState('');
    const [secondaryPeriodTo, setSecondaryPeriodTo] = useState('');
    const [secondaryHighestLevel, setSecondaryHighestLevel] = useState('');
    const [secondaryYearGraduated, setSecondaryYearGraduated] = useState('');
    const [secondaryAcademicHonors, setSecondaryAcademicHonors] = useState('');
    const [vocationalSchool, setVocationalSchool] = useState('');
    const [vocationalDegree, setVocationalDegree] = useState('');
    const [vocationalPeriodFrom, setVocationalPeriodFrom] = useState('');
    const [vocationalPeriodTo, setVocationalPeriodTo] = useState('');
    const [vocationalHighestLevel, setVocationalHighestLevel] = useState('');
    const [vocationalYearGraduated, setVocationalYearGraduated] = useState('');
    const [vocationalAcademicHonors, setVocationalAcademicHonors] = useState('');
    const [collegeSchool, setCollegeSchool] = useState('');
    const [collegeDegree, setCollegeDegree] = useState('');
    const [collegePeriodFrom, setCollegePeriodFrom] = useState('');
    const [collegePeriodTo, setCollegePeriodTo] = useState('');
    const [collegeHighestLevel, setCollegeHighestLevel] = useState('');
    const [collegeYearGraduated, setCollegeYearGraduated] = useState('');
    const [collegeAcademicHonors, setCollegeAcademicHonors] = useState('');
    const [graduateSchool, setGraduateSchool] = useState('');
    const [graduateDegree, setGraduateDegree] = useState('');
    const [graduatePeriodFrom, setGraduatePeriodFrom] = useState('');
    const [graduatePeriodTo, setGraduatePeriodTo] = useState('');
    const [graduateHighestLevel, setGraduateHighestLevel] = useState('');
    const [graduateYearGraduated, setGraduateYearGraduated] = useState('');
    const [graduateAcademicHonors, setGraduateAcademicHonors] = useState('');


    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setPermanentAddress(item.permanent_address);
            setZipCode(item.zip_code);
            setEmail(item.email);
            setPhone(item.phone);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setCivilStatus(item.civil_status);
            setSex(item.sex);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodtype(item.bloodtype);
            setCitizenship(item.citizenship);
            setGsis(item.gsis);
            setPagIbigNo(item.pag_ibig_no);
            setPhilhealth(item.philhealth);
            setSss(item.sss);
            setTin(item.tin);
            setAgencyEmployeeNo(item.agency_employee_no);
            setOccupation(item.occupation);
            setEmployeeBusiness(item.employee_business);
            setBusinessAddress(item.business_address);
            setElementarySchool(item.elementary_school || '');
            setElementaryDegree(item.elementary_degree || '');
            setElementaryPeriodFrom(item.elementary_period_from || '');
            setElementaryPeriodTo(item.elementary_period_to || '');
            setElementaryHighestLevel(item.elementary_highest_level || '');
            setElementaryYearGraduated(item.elementary_year_graduated || '');
            setElementaryAcademicHonors(item.elementary_academic_honors || '');
            setSecondarySchool(item.secondary_school || '');
            setSecondaryDegree(item.secondary_degree || '');
            setSecondaryPeriodFrom(item.secondary_period_from || '');
            setSecondaryPeriodTo(item.secondary_period_to || '');
            setSecondaryHighestLevel(item.secondary_highest_level || '');
            setSecondaryYearGraduated(item.secondary_year_graduated || '');
            setSecondaryAcademicHonors(item.secondary_academic_honors || '');
            setVocationalSchool(item.vocational_school || '');
            setVocationalDegree(item.vocational_degree || '');
            setVocationalPeriodFrom(item.vocational_period_from || '');
            setVocationalPeriodTo(item.vocational_period_to || '');
            setVocationalHighestLevel(item.vocational_highest_level || '');
            setVocationalYearGraduated(item.vocational_year_graduated || '');
            setVocationalAcademicHonors(item.vocational_academic_honors || '');
            setCollegeSchool(item.college_school || '');
            setCollegeDegree(item.college_degree || '');
            setCollegePeriodFrom(item.college_period_from || '');
            setCollegePeriodTo(item.college_period_to || '');
            setCollegeHighestLevel(item.college_highest_level || '');
            setCollegeYearGraduated(item.college_year_graduated || '');
            setCollegeAcademicHonors(item.college_academic_honors || '');
            setGraduateSchool(item.graduate_school || '');
            setGraduateDegree(item.graduate_degree || '');
            setGraduatePeriodFrom(item.graduate_period_from || '');
            setGraduatePeriodTo(item.graduate_period_to || '');
            setGraduateHighestLevel(item.graduate_highest_level || '');
            setGraduateYearGraduated(item.graduate_year_graduated || '');
            setGraduateAcademicHonors(item.graduate_academic_honors || '');
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address,
            permanent_address: permanentAddress,
            zip_code: zipCode,
            email,
            phone,
            date_of_birth: dateOfBirth,
            place_of_birth: placeOfBirth,
            civil_status: civilStatus,
            sex,
            height,
            weight,
            bloodtype,
            citizenship,
            gsis,
            pag_ibig_no: pagIbigNo,
            philhealth,
            sss,
            tin,
            agency_employee_no: agencyEmployeeNo,
            occupation,
            employee_business: employeeBusiness,
            business_address: businessAddress,
            elementary_school: elementarySchool,
            elementary_degree: elementaryDegree,
            elementary_period_from: elementaryPeriodFrom,
            elementary_period_to: elementaryPeriodTo,
            elementary_highest_level: elementaryHighestLevel,
            elementary_year_graduated: elementaryYearGraduated,
            elementary_academic_honors: elementaryAcademicHonors,
            secondary_school: secondarySchool,
            secondary_degree: secondaryDegree,
            secondary_period_from: secondaryPeriodFrom,
            secondary_period_to: secondaryPeriodTo,
            secondary_highest_level: secondaryHighestLevel,
            secondary_year_graduated: secondaryYearGraduated,
            secondary_academic_honors: secondaryAcademicHonors,
            vocational_school: vocationalSchool,
            vocational_degree: vocationalDegree,
            vocational_period_from: vocationalPeriodFrom,
            vocational_period_to: vocationalPeriodTo,
            vocational_highest_level: vocationalHighestLevel,
            vocational_year_graduated: vocationalYearGraduated,
            vocational_academic_honors: vocationalAcademicHonors,
            college_school: collegeSchool,
            college_degree: collegeDegree,
            college_period_from: collegePeriodFrom,
            college_period_to: collegePeriodTo,
            college_highest_level: collegeHighestLevel,
            college_year_graduated: collegeYearGraduated,
            college_academic_honors: collegeAcademicHonors,
            graduate_school: graduateSchool,
            graduate_degree: graduateDegree,
            graduate_period_from: graduatePeriodFrom,
            graduate_period_to: graduatePeriodTo,
            graduate_highest_level: graduateHighestLevel,
            graduate_year_graduated: graduateYearGraduated,
            graduate_academic_honors: graduateAcademicHonors,
        };
        
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
            <label>Middle Name</label>
            <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
            <label>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
            <label>Permanent Address</label>
            <input type="text" value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} />
        </div>
        <div>
            <label>Zip Code</label>
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </div>
        <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
            <label>Date of Birth</label>
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </div>
        <div>
            <label>Place of Birth</label>
            <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
        </div>
        <div>
            <label>Civil Status</label>
            <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
        </div>
        <div>
            <label>Sex</label>
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="">Select...</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
        </div>
        <div>
            <label>Height</label>
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div>
            <label>Weight</label>
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
            <label>Blood Type</label>
            <input type="text" value={bloodtype} onChange={(e) => setBloodtype(e.target.value)} />
        </div>
        <div>
            <label>Citizenship</label>
            <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
        </div>
        <div>
            <label>GSIS</label>
            <input type="text" value={gsis} onChange={(e) => setGsis(e.target.value)} />
        </div>
        <div>
            <label>Pag-Ibig No</label>
            <input type="text" value={pagIbigNo} onChange={(e) => setPagIbigNo(e.target.value)} />
        </div>
        <div>
            <label>PhilHealth</label>
            <input type="text" value={philhealth} onChange={(e) => setPhilhealth(e.target.value)} />
        </div>
        <div>
            <label>SSS</label>
            <input type="text" value={sss} onChange={(e) => setSss(e.target.value)} />
        </div>
        <div>
            <label>TIN</label>
            <input type="text" value={tin} onChange={(e) => setTin(e.target.value)} />
        </div>
        <div>
            <label>Agency Employee No</label>
            <input type="text" value={agencyEmployeeNo} onChange={(e) => setAgencyEmployeeNo(e.target.value)} />
        </div>
        <div>
            <label>Occupation</label>
            <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </div>
        <div>
            <label>Employee Business</label>
            <input type="text" value={employeeBusiness} onChange={(e) => setEmployeeBusiness(e.target.value)} />
        </div>
        <div>
            <label>Business Address</label>
            <input type="text" value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} />
        </div>
            <h2>Educational Background</h2>
        
        {/* Elementary Education */}
        <div className="form-row">
            <label>Elementary School</label>
            <input type="text" value={elementarySchool} onChange={(e) => setElementarySchool(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Elementary Degree</label>
            <input type="text" value={elementaryDegree} onChange={(e) => setElementaryDegree(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Elementary Period From</label>
            <input type="date" value={elementaryPeriodFrom} onChange={(e) => setElementaryPeriodFrom(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Elementary Period To</label>
            <input type="date" value={elementaryPeriodTo} onChange={(e) => setElementaryPeriodTo(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Elementary Highest Level</label>
            <input type="text" value={elementaryHighestLevel} onChange={(e) => setElementaryHighestLevel(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Elementary Year Graduated</label>
            <input type="number" value={elementaryYearGraduated} onChange={(e) => setElementaryYearGraduated(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Elementary Academic Honors</label>
            <input type="text" value={elementaryAcademicHonors} onChange={(e) => setElementaryAcademicHonors(e.target.value)} />
        </div>

        {/* Secondary Education */}
        <div className="form-row">
            <label>Secondary School</label>
            <input type="text" value={secondarySchool} onChange={(e) => setSecondarySchool(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Secondary Degree</label>
            <input type="text" value={secondaryDegree} onChange={(e) => setSecondaryDegree(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Secondary Period From</label>
            <input type="date" value={secondaryPeriodFrom} onChange={(e) => setSecondaryPeriodFrom(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Secondary Period To</label>
            <input type="date" value={secondaryPeriodTo} onChange={(e) => setSecondaryPeriodTo(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Secondary Highest Level</label>
            <input type="text" value={secondaryHighestLevel} onChange={(e) => setSecondaryHighestLevel(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Secondary Year Graduated</label>
            <input type="number" value={secondaryYearGraduated} onChange={(e) => setSecondaryYearGraduated(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Secondary Academic Honors</label>
            <input type="text" value={secondaryAcademicHonors} onChange={(e) => setSecondaryAcademicHonors(e.target.value)} />
        </div>

        {/* Vocational Education */}
        <div className="form-row">
            <label>Vocational School</label>
            <input type="text" value={vocationalSchool} onChange={(e) => setVocationalSchool(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Vocational Degree</label>
            <input type="text" value={vocationalDegree} onChange={(e) => setVocationalDegree(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Vocational Period From</label>
            <input type="date" value={vocationalPeriodFrom} onChange={(e) => setVocationalPeriodFrom(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Vocational Period To</label>
            <input type="date" value={vocationalPeriodTo} onChange={(e) => setVocationalPeriodTo(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Vocational Highest Level</label>
            <input type="text" value={vocationalHighestLevel} onChange={(e) => setVocationalHighestLevel(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Vocational Year Graduated</label>
            <input type="number" value={vocationalYearGraduated} onChange={(e) => setVocationalYearGraduated(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Vocational Academic Honors</label>
            <input type="text" value={vocationalAcademicHonors} onChange={(e) => setVocationalAcademicHonors(e.target.value)} />
        </div>

        {/* College Education */}
        <div className="form-row">
            <label>College School</label>
            <input type="text" value={collegeSchool} onChange={(e) => setCollegeSchool(e.target.value)} />
        </div>
        <div className="form-row">
            <label>College Degree</label>
            <input type="text" value={collegeDegree} onChange={(e) => setCollegeDegree(e.target.value)} />
        </div>
        <div className="form-row">
            <label>College Period From</label>
            <input type="date" value={collegePeriodFrom} onChange={(e) => setCollegePeriodFrom(e.target.value)} />
        </div>
        <div className="form-row">
            <label>College Period To</label>
            <input type="date" value={collegePeriodTo} onChange={(e) => setCollegePeriodTo(e.target.value)} />
        </div>
        <div className="form-row">
            <label>College Highest Level</label>
            <input type="text" value={collegeHighestLevel} onChange={(e) => setCollegeHighestLevel(e.target.value)} />
        </div>
        <div className="form-row">
            <label>College Year Graduated</label>
            <input type="number" value={collegeYearGraduated} onChange={(e) => setCollegeYearGraduated(e.target.value)} />
        </div>
        <div className="form-row">
            <label>College Academic Honors</label>
            <input type="text" value={collegeAcademicHonors} onChange={(e) => setCollegeAcademicHonors(e.target.value)} />
        </div>

        {/* Graduate Education */}
        <div className="form-row">
            <label>Graduate School</label>
            <input type="text" value={graduateSchool} onChange={(e) => setGraduateSchool(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Graduate Degree</label>
            <input type="text" value={graduateDegree} onChange={(e) => setGraduateDegree(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Graduate Period From</label>
            <input type="date" value={graduatePeriodFrom} onChange={(e) => setGraduatePeriodFrom(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Graduate Period To</label>
            <input type="date" value={graduatePeriodTo} onChange={(e) => setGraduatePeriodTo(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Graduate Highest Level</label>
            <input type="text" value={graduateHighestLevel} onChange={(e) => setGraduateHighestLevel(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Graduate Year Graduated</label>
            <input type="number" value={graduateYearGraduated} onChange={(e) => setGraduateYearGraduated(e.target.value)} />
        </div>
        <div className="form-row">
            <label>Graduate Academic Honors</label>
            <input type="text" value={graduateAcademicHonors} onChange={(e) => setGraduateAcademicHonors(e.target.value)} />
        </div>    
    <button type="submit">Submit</button>
</form>
         
);
};

export default ItemForm;