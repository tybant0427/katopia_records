import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';


const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 50px;
    border-radius: 15px;
    
    
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 70%;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
    
   
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    font-size: 10px;
    
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      // padding: 0;
      
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
      // padding: 2rem 1rem 1rem 1rem;
      
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <div className='contact-bg'>
        
        
    <ContactSectionStyle>
      
      <div className="container">
        <SectionTitle heading="contact" subheading="Book Now" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="(612) 770-9056" />
            <ContactInfoItem icon={<MdEmail />} text="katopiarecords@gmail.com" />
            <ContactInfoItem text="Minneapolis, MN" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
    </div>
  );
}

