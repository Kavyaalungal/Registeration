import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './App.css';
import './Registration.css';
import { Link } from 'react-router-dom';

function Registration() {
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handlePrefixChange = (e) => {
    const prefix = e.target.value;
    if (prefix === 'MR:') {
      setGender('MALE');
    } else if (prefix === 'MRS:' || prefix === 'MISS:') {
      setGender('FEMALE');
    } else {
      setGender('');
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    const dateObj = new Date(selectedDate);
    setYear(dateObj.getFullYear());
    setMonth(('0' + (dateObj.getMonth() + 1)).slice(-2));
    setDay(('0' + dateObj.getDate()).slice(-2));
  };

  // const handlePhoneNumberChange = (e) => {
  //   const number = e.target.value;
  //   setPhoneNumber(number);
  // };

  // const validatePhoneNumber = () => {
  //   const phoneNumberRegex = /^\d{10}$/;
  //   if (!phoneNumberRegex.test(phoneNumber)) {
  //     setPhoneNumberError('Please enter a valid 10-digit phone number.');
  //   } else if (!/^\d+$/.test(phoneNumber)) {
  //     setPhoneNumberError('Phone number should contain only digits.');
  //   } else {
  //     setPhoneNumberError('');
  //   }
  // };

  return (
    <>
      <fieldset className='fieldset'>
        <legend>Search</legend>
        <div className='search'>
          <TextField id="outlined-basic" label="Search" className='search' variant="outlined" size="small" />
          <button className='button'>Search</button>
        </div>
        <div className="uhid">
          <TextField id="outlined-basic" label="UHID" variant="outlined" size="small" />
        </div>
      </fieldset>
      <fieldset className='fieldset'>
        <legend>Patient details:</legend>
        <form>
          <div className='select input-row'>
            <select name="" id="" onChange={handlePrefixChange}>
              <option value="">---</option>
              <option value="MR:">MR:</option>
              <option value="MRS:">MRS:</option>
              <option value="MISS:">MISS:</option>
            </select>
            <TextField className='name' id="outlined-basic" label="Enter your name" variant="outlined" size="small" />
          </div>
          <div className="input-row">
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">---</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHERS">OTHERS</option>
            </select>
            <TextField
              id="dateofbirth"
              label="DOB"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={date}
              onChange={handleDateChange}
            />
            <div className="input-group">
              <TextField id="year" label="YYYY" variant="outlined" value={year} InputProps={{ readOnly: true }} size="small" />
              <TextField id="month" label="MM" variant="outlined" value={month} InputProps={{ readOnly: true }} size="small" />
              <TextField id="day" label="DD" variant="outlined" value={day} InputProps={{ readOnly: true }} size="small" />
            </div>
          </div>
          <div className="email input-row">
            <TextField
              id="phoneNumber"
              label="Phone"
              type="tel"
              variant="outlined"
              size="small"
              // value={phoneNumber}
              // onChange={handlePhoneNumberChange}
              // onBlur={validatePhoneNumber}
              fullWidth
            />
            <TextField id="email" label="Email" type="email" variant="outlined" size="small" fullWidth />
            {phoneNumberError && <p className="error">{phoneNumberError}</p>}
          </div>
          <div className="input-row">
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              size="small"
              multiline
              rows={4}
              fullWidth
            />
          </div>
          <div className="input-row">
            <TextField
              id="notes"
              label="Notes"
              variant="outlined"
              size="small"
              multiline
              rows={4}
              fullWidth
            />
          </div>
          <div className='link'>
        {/* Use Link component for navigation */}
        <Link to="/additional-details">
          <button className='button'>
            Additional details
          </button>
        </Link>
      </div>
          <div className="container">
            <button type="button" className='button'>NEW</button>
            <button type="button" className='button'>PROCEED TO BILL</button>
            <button type="button" className='button'>SAVE & PROCEED TO BILL</button>
          </div>
        </form>
      </fieldset>
    </>
  );
}

export default Registration;
