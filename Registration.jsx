import React, { useState } from 'react'; // Import React

import './App.css';
import './Registration.css';

function Registration() {
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handlePrefixChange = (e) => {
    const prefix = e.target.value;
    console.log(`Selected prefix: ${prefix}`);
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
    setMonth(('0' + (dateObj.getMonth() + 1)).slice(-2)); // Adding 1 because getMonth() returns month from 0-11
    setDay(('0' + dateObj.getDate()).slice(-2));
  };

  return (
    <>
      <fieldset className='field'>
        <legend>Search</legend>
        <div className='search'>
          <input type="text" name="" id="" placeholder='search here' />
          <button className='button'>search</button>
        </div>
        <div className="uhid">
          <label htmlFor="uhid">UHID:</label>
          <input type="text" name="" id="" />
        </div>
      </fieldset>
      <fieldset>
        <legend>Patient details:</legend>
        <form action="">
          <div className='select'>
            <select name="" id="" onChange={handlePrefixChange}>
              <option value="">---</option>
              <option value="MR:">MR:</option>
              <option value="MRS:">MRS:</option>
              <option value="MISS:">MISS:</option>
            </select>
            <input type="text" name="name" id="name" placeholder='Enter your name' />
          </div>
          <div className="input-row">
            <div className='gender'>
              <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">---</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
              <input type="date" name="dateofbirth" id="dateofbirth" value={date} onChange={handleDateChange} />
              <div className="input-group">
                <input type="text" id="year" placeholder="YYYY" value={year} readOnly />
                <input type="text" id="month" placeholder="MM" value={month} readOnly />
                <input type="text" id="day" placeholder="DD" value={day} readOnly />
              </div>
            </div>
          </div>
          <div className='email'>
            <input type="tel" name="" id="" placeholder='enter your phone number' />
            <input type="email" name="" id="" placeholder='enter your email ' />
          </div>
          <textarea name="" id="" cols={150} rows={5}>Enter your address</textarea><br />
          <textarea name="" id="" cols={150} rows={5}>Enter any notes</textarea>
          <div className='link'>
            <a href="https://www.example.com">
              <button>
                Additional details
              </button>
            </a>
          </div>
          <div className="container">
            <button>NEW</button>
            <button>PROCEED TO BUY</button>
            <button>SAVE & PROCEED TO BUY</button>
          </div>
        </form>
      </fieldset>
    </>
  );
}

export default Registration;
