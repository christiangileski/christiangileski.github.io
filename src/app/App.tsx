import { Routes, Route, Navigate } from 'react-router-dom';

import { About, Contact, Home, Projects, Resume } from '../views';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />

      {/* Fallback gracefully to the homepage */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default App;
