import React from 'react';

import style from './Contact.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';

function Contact() {
  
  return (
    <>
      <div className={style.Contact}>
        <div className={style.contactContainer}>
          <ContactForm />
        </div>
        <Footer />
      </div>
      
    </>
  );
}

export default Contact;
