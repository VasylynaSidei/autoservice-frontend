import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import "./contacts.scss";
function Contacts() {

  return (
    <>
      <section id="contacts">
        <h2>Kontakte</h2>
        <div className="contacts-container">
          <div className="contact-container-info">
            <div className="opening-hours">
              <h6 className="opening-hours__title">Öffnungszeiten</h6>

              <div className="opening-hours__row">
                <p className="opening-hours__day">Montag - Donnerstag:</p>
                <p className="opening-hours__time">8:00 Uhr - 18:00 Uhr</p>
              </div>

              <div className="opening-hours__row">
                <p className="opening-hours__day">Freitag:</p>
                <p className="opening-hours__time opening-hours__time--note">
                  8:00 Uhr - 16:00 Uhr
                </p>
              </div>
            </div>

            <div className="contact-info">
              <div>
               <div className="contact-icon">
                <IoLocationOutline className="svg" /> Gewerbegebiet Eichholzstraße 19, 17192
                Waren (Müritz)
              </div>
              <div className="contact-icon">
                <FiPhone className="svg" /> 03991 6734060
              </div>
              <div className="contact-icon">
                <MdMailOutline className="svg"/>
                gundpmeisterwerkstatt@t-online.de
              </div>  
              </div>
             <div className="social-cont">
              {/*<h6>Social Media</h6>*/}
              <p className="social-icon"> <a href="https://wa.me/+49039916734060"><img src="src/assets/images/social.png" alt="" /></a></p>
              <p className="social-icon">  <a href="https://www.instagram.com/gundpmeisterwerkstatt?igsh=MWpoaG9tNDRheGgweA=="><img src="src/assets/images/instagram.png" alt="" /></a></p>
              <p className="social-icon">              <a href="https://www.facebook.com/share/1AHrFQDhBU/?mibextid=wwXIfr"><img src="src/assets/images/facebook.png" alt="" /></a>
</p>
             
             
            </div>
            </div>
            
          </div>
          <div className="red-line"></div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.110363230071!2d12.700662614991554!3d53.51417237741565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47abf9208d4d9a8f%3A0xae20ce7ee34eff50!2sG%26P%20Meisterwerkstatt%20Grambeck%20und%20Pritcin!5e0!3m2!1sru!2sde!4v1746264689983!5m2!1sru!2sde"
              width="600"
              height="400"
              style={{ border: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
