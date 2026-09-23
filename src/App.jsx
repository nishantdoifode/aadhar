import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NewsMediaSection from './components/Media/NewsMediaSection';
import Ecosystem from './components/Ecosystem/Ecosystem';
import Welcomepage from './Welcomepage';
import Mainpagedata1 from './components/Homepagecontent/Mainpagedata1';
import Aboutpage from './components/About/Aboutpage';
import Contact from './components/Contact/Contact';
import ImageSlider from './components/navbar/Imageslider';
import Optionsnavbar from './components/navbar/Optionsnavbar';
import Aadhaarstatus from './components/Adhaarservices/AadhaarStatus';
import DownloadAadhaar from './components/Adhaarservices/DownloadAadhaar';
import Dashboard from './components/Adhaarservices/Dashboard';
import Updateaadhaar from './components/Homepagecontent/Updateaadhaar';
import Geta from './components/Homepagecontent/Geta';
import Aadhaarservices from './components/Homepagecontent/Aadhaarservices';

// New Layout Component
import MainLayout from './components/Layout/MainLayout'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Standalone page without main layout */}
        <Route path="/" element={<Welcomepage />} />

        {/* All other pages wrapped in MainLayout */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Home Page */}
          <Route index element={
            <>
              <ImageSlider />
              <Optionsnavbar />
              <Mainpagedata1 />
            </>
          } />

          {/* Other Pages */}
          <Route path="Home" element={
            <>
              <ImageSlider />
              <Optionsnavbar />
              <Mainpagedata1 />
            </>
          } />
          
          <Route path="About" element={<Aboutpage />} />
          <Route path="Ecosystem" element={<Ecosystem />} />
          <Route path="Media" element={<NewsMediaSection />} />
          <Route path="Contact" element={<Contact />} />
          
          <Route path="download-aadhaar" element={<DownloadAadhaar />} />
          <Route path="aadhaar-status" element={<Aadhaarstatus />} />
          
          <Route path="Update-A" element={<Updateaadhaar />} />
          <Route path="Update-B" element={<Geta />} />
          <Route path="Update-C" element={<Aadhaarservices />} />
          
          {/* Note: If Dashboard needs a different layout, keep it outside this block */}
          <Route path="Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;