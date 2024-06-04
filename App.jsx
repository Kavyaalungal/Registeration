import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import AdditionalDetails from './Additionaldetails';

function App() {
  return (
    <>
      <h1>REGISTRATION FORM</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/additional-details" element={<AdditionalDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
