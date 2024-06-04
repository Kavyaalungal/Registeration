import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'; // Add this line
import Select from '@mui/material/Select'; // Add this line
import MenuItem from '@mui/material/MenuItem'; // Add this line
import { FormControl } from '@mui/material';
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
  <TextField
    id="outlined-basic"
    label="Search"
    className='search'
    variant="outlined"
    size="small"
    InputProps={{
      style: { height: '40px', width: '200px' },
   
    }}
    InputLabelProps={{ style: { fontSize: '14px', marginTop: '-3px' } }}
  />
  <button className='button'>Search</button>
</div>
        
      </fieldset>
      <div className="uhid">
          <TextField id="outlined-basic" label="UHID" variant="outlined" size="small"
           InputProps={{ style: { height: '30px' ,width:'150px' } }}
           InputLabelProps={{ style: { fontSize: '14px', marginTop: '-5px' } }} />
        </div>
      <fieldset className='fieldset'>
        <legend>Patient details:</legend>
        <form>
          <div className='select input-row'>
            
      <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Prefix</InputLabel>
          <Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={gender ? `${gender}:` : ''} 
  label="Prefix"
  onChange={handlePrefixChange}
>
  <MenuItem value="MR:">MR:</MenuItem>
  <MenuItem value="MRS:">MRS:</MenuItem>
  <MenuItem value="MISS:">MISS:</MenuItem>
</Select>
</FormControl>
 {/* <select name="" id="" onChange={handlePrefixChange}>
              <option value="">---</option>
              <option value="MR:">MR:</option>
              <option value="MRS:">MRS:</option>
              <option value="MISS:">MISS:</option>
            </select> */}
            <TextField className='name' id="outlined-basic" label="Enter your name" variant="outlined" size="small"
              InputProps={{ style: { width:'650px' } }}
              InputLabelProps={{ style: { fontSize: '14px', marginTop: '-1px' } }}/>
          </div>
          <div className=" select input-row">

          <FormControl sx={{ m: 1, minWidth: 90 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Gender</InputLabel>
          <Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  label="gender"
  value={gender} onChange={(e) => setGender(e.target.value)}
>
  <MenuItem value="MALE">MALE</MenuItem>
  <MenuItem value="FEMALE">FEMALE</MenuItem>
  <MenuItem value="OTHERS">OTHERS</MenuItem>
</Select>
</FormControl>






            {/* <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHERS">OTHERS</option>
            </select> */}
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
            {/* {phoneNumberError && <p className="error">{phoneNumberError}</p>} */}
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
