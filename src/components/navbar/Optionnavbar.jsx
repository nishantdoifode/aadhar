import React, { useState } from 'react';
import ImageSlider from './Imageslider';
import { Link } from 'react-router-dom';
const Optionnavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
const [isOpen, setIsOpen] = useState(false);
  // Mega menu data
  const megaMenuData = {
    myAadhaar: {
      title: "My Aadhaar",
      sections: [
        {
          heading: " Update Your Aadhaar",
          links: [
            { text: "Document Update", url: "#" },
            { text: "Update Demographics Data & Check Status", url: "#" },
            { text: "Enrolment And Update Forms", url: "#" },
            { text: "Aadhaar Enrolment And Upgrade Charges", url: "#" },
            { text: "Aadhaar Update History", url: "#" },
            { text: "Update Aadhaar at Enrolment/Update Center", url: "#" }
          ]
        },
        {
          heading: "Get Aadhaar",
          links: [
            { text: "Book an Appointment", url: "#" },
            { text: "Check aadhaar Status", url: "#" },
            { text: "Download Aadhaar", url: "#" },
            { text: "Order PVC Card", url: "#" },
            { text: "Check Aadhaar PVC Order Status", url: "#" },
            { text: "Locate An Enrolment Center in Bhuvan Aadhar", url: "#" }
          ]
        },
        {
          heading: "Aadhaar Services",
          links: [

            { text: "Verify an Aadhaar number", url: "#" },
            { text: "Verify Email/number", url: "#" },
            { text: "Retrieve Lost an Forgotten UID/EID", url: "#" },
            { text: "Virtual ID (VID)", url: "#" },

            { text: "Aadhaar Paperless Offline eKYC", url: "#" },
            { text: "Bank Seeding Status ", url: "#" },
            { text: "Check Aadhaar Validity ", url: "#" },
            { text: "Lock/Unlock Biometrics", url: "#" },
            { text: "Aadhaar Authentication History ", url: "#" },
            { text: "aadhaar Lock and Unlock Service ", url: "#" },
            { text: "Aadhaar Service on SMS ", url: "#" },


          ]
        },
        {
          heading: "About Aadhaar",
          links: [
            { text: "Features Of Aadhaar", url: "#" },
            { text: "Useage of aadhaar", url: "#" },
            { text: "Enrolment aadhaar", url: "#" },
            { text: "aadhaar Generation", url: "#" },
            { text: "Updating Data on Aadhaar", url: "#" },
            { text: "Security On UIDAI System", url: "#" },
            { text: "aadhaar Myth Busters", url: "#" },

          ]
        },
        {
          heading: "Aadhaar On Your Mobile",
          links: [
            { text: "mAadhar For Mobile", url: "#" },
            { text: "mAadhar App Links For lOS", url: "#" },


          ]


        }
      ]
    },
    aboutUidai: {
      title: "About UIDAI",
      sections: [
        {
          heading: "Organization",
          links: [
            { text: "About Us", url: "#" },
            { text: "Vision & Mission", url: "#" },
            { text: "Leadership", url: "#" },
            { text: "Organization Structure", url: "#" }
          ]
        },
        {
          heading: "Legal",
          links: [
            { text: "Aadhaar Act", url: "#" },
            { text: "Regulations", url: "#" },
            { text: "Circulars", url: "#" },
            { text: "Notifications", url: "#" }
          ]
        },
        {
          heading: "Careers",
          links: [
            { text: "Current Openings", url: "#" },
            { text: "How to Apply", url: "#" },
            { text: "Recruitment Process", url: "#" }
          ]
        },
        {
          heading: "Transparency",
          links: [
            { text: "RTI", url: "#" },
            { text: "Tenders", url: "#" },
            { text: "Annual Reports", url: "#" },
            { text: "Financial Statements", url: "#" }
          ]
        }
      ]
    },
    ecosystem: {
      title: "Ecosystem",
      sections: [
        {
          heading: "Partners",
          links: [
            { text: "Enrolment Agencies", url: "#" },
            { text: "Authentication User Agencies", url: "#" },
            { text: "KYC User Agencies", url: "#" },
            { text: "Requesting Entities", url: "#" }
          ]
        },
        {
          heading: "Developers",
          links: [
            { text: "API Documentation", url: "#" },
            { text: "Developer Guidelines", url: "#" },
            { text: "Testing Facility", url: "#" },
            { text: "SDK Download", url: "#" }
          ]
        },
        {
          heading: "Authentication",
          links: [
            { text: "Authentication Types", url: "#" },
            { text: "eKYC Services", url: "#" },
            { text: "Offline Verification", url: "#" }
          ]
        },
        {
          heading: "Resources",
          links: [
            { text: "Technical Specifications", url: "#" },
            { text: "Best Practices", url: "#" },
            { text: "FAQs for Partners", url: "#" }
          ]
        }
      ]
    },
    media: {
      title: "Media & Resources",
      sections: [
        {
          heading: "News & Updates",
          links: [
            { text: "Press Releases", url: "#" },
            { text: "News", url: "#" },
            { text: "Events", url: "#" },
            { text: "Photo Gallery", url: "#" }
          ]
        },
        {
          heading: "Publications",
          links: [
            { text: "Newsletters", url: "#" },
            { text: "Annual Reports", url: "#" },
            { text: "Brochures", url: "#" },
            { text: "Posters", url: "#" }
          ]
        },
        {
          heading: "Downloads",
          links: [
            { text: "Forms", url: "#" },
            { text: "User Manuals", url: "#" },
            { text: "Templates", url: "#" },
            { text: "Software", url: "#" }
          ]
        },
        {
          heading: "Awareness",
          links: [
            { text: "Videos", url: "#" },
            { text: "Infographics", url: "#" },
            { text: "Social Media", url: "#" },
            { text: "Campaigns", url: "#" }
          ]
        }
      ]
    },
    contact: {
      title: "Contact & Support",
      sections: [
        {
          heading: "Help & Support",
          links: [
            { text: "FAQs", url: "#" },
            { text: "Contact Us", url: "#" },
            { text: "Regional Offices", url: "#" },
            { text: "Helpline Numbers", url: "#" }
          ]
        },
        {
          heading: "Grievances",
          links: [
            { text: "File a Complaint", url: "#" },
            { text: "Track Complaint Status", url: "#" },
            { text: "Grievance Redressal", url: "#" }
          ]
        },
        {
          heading: "Feedback",
          links: [
            { text: "Submit Feedback", url: "#" },
            { text: "Suggestions", url: "#" },
            { text: "Rate Our Services", url: "#" }
          ]
        },
        {
          heading: "Special Support",
          links: [
            { text: "NEET/Exam Grievance", url: "#" },
            { text: "Senior Citizen Support", url: "#" },
            { text: "Disability Support", url: "#" }
          ]
        }
      ]
    }
  };

  return (
    <>
   
      <nav id="optionnav">
        <div className="btn" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <ul className={isOpen ? "mobile-show" : ""}>
          <li
            onMouseEnter={() => setActiveMenu('myAadhaar')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/Home">  My Aadhaar<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4L6 9L11 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg> </Link>
          </li>

          <li
            onMouseEnter={() => setActiveMenu('aboutUidai')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/About">About UIDAI<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4L6 9L11 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Link>

          </li>

          <li
            onMouseEnter={() => setActiveMenu('ecosystem')}
            onMouseLeave={() => setActiveMenu(null)}
          > <Link to="/Ecosystem" >Ecosystem <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4L6 9L11 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></Link>

            

          </li>

          <li
            onMouseEnter={() => setActiveMenu('media')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="/Media">
              Media & Resources <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L6 9L11 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </li>

          <li
            onMouseEnter={() => setActiveMenu('contact')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="/Contact">
              Contact & Support
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L6 9L11 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </li>

          <li>
            <input type="search" id="search" placeholder="Search" />
            <input type="button" value="Go" />
          </li>
        </ul>

      </nav>

    


    </>
  );
};

export default Optionnavbar;