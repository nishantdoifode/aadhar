import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import NewsMediaSection from './components/Media/NewsMediaSection';
import Navbar from './components/navbar/Navbar'
import Optionnavbar from './components/navbar/Optionnavbar'
import Footer from './components/Footer/Footer'
import Ecosystem from './components/Ecosystem/Ecosystem'
import Welcomepage from './Welcomepage'
import Mainpagedata1 from './components/Homepagecontent/Mainpagedata1'
import Aboutpage from './components/About/Aboutpage'
import Contact from './components/Contact/Contact';
import ImageSlider from './components/navbar/Imageslider';
import Optionsnavbar from './components/navbar/Optionsnavbar';
import Aadhaarstatus from './components/Adhaarservices/AadhaarStatus';
import DownloadAadhaar from './components/Adhaarservices/DownloadAadhaar';
import Dashboard from './components/Adhaarservices/Dashboard';
import Updateaadhaar from './components/Homepagecontent/Updateaadhaar';
import Geta from './components/Homepagecontent/Geta';
import Aadhaarservices from './components/Homepagecontent/Aadhaarservices';

const App = () => {
  return (
    <Router>
      <Routes>


        <Route path="/" element={<Welcomepage />} />
        <Route path='/Home' element={
          <>

            <Navbar />
            <Optionnavbar />
            <ImageSlider />
            <Optionsnavbar />
            <Mainpagedata1 />
            <Footer />

          </>
        } />

        <Route path='/About' element={
          <>
            <Navbar />
            <Optionnavbar />
           
            <Optionsnavbar />
            <Aboutpage />
            <Footer />

          </>
        } />
        <Route path='/Ecosystem' element={
          <>
            <Navbar />
            <Optionnavbar />
            <Ecosystem />
            <Footer />

          </>
        } />
        <Route path='/Media' element={
          <>
            <Navbar />
            <Optionnavbar />
            <NewsMediaSection />
            <Footer />

          </>
        } />
        <Route path='/Contact' element={
          <>
            <Navbar />
            <Optionnavbar />
            <Contact />
            <Footer />

          </>
        } />

        <Route path='/aadhaar-status' element={<><Aadhaarstatus /></>} />
        <Route path='/download-aadhaar' element={<><Navbar /><Optionnavbar /><DownloadAadhaar /><Footer /></>} />
        <Route path='/aadhaar-status' element={<><Navbar /><Optionnavbar /><Aadhaarstatus /><Footer /></>} />
        <Route path='/Dashboard' element={<> <Dashboard /> </>} />

        
<Route path='/Update-A' element={<><Navbar/><Optionnavbar/><Updateaadhaar/><Footer/></>} />
<Route path='/Update-B' element={<><Navbar/><Optionnavbar/><Geta/><Footer/></>} />
<Route path='/Update-C' element={<><Navbar/><Optionnavbar/><Aadhaarservices/><Footer/></>} />
      </Routes>
     
    </Router>

    
  )
  
}

export default App