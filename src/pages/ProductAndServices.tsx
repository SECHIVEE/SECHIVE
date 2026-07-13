import React from 'react';
import './ProductAndServices.css';

const ProductAndServices: React.FC = () => {
  // Scroll to section if hash is present in URL
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);
  return (
    <div className="intro-content">
      <h2>Products & Services</h2>
      <p>
        SECHIVE provides <b>comprehensive security services</b>, ensuring maximum protection through <b>advanced security technologies</b> and <b>highly trained personnel</b>.
      </p>
      <ul>
        <li id="corporate"><b>Corporate & Commercial Security</b> – AI-powered surveillance and biometric access systems for business centers and financial institutions.</li>
        <li id="industrial"><b>Industrial & Manufacturing Security</b> – Securing factories, warehouses, and production facilities with advanced monitoring.</li>
        <li id="event"><b>Event & Crowd Security</b> – Expert management of security for large-scale events and high-profile venues.</li>
        <li id="tourism"><b>Tourism & Hospitality Security</b> – Customized security for hotels, resorts, and entertainment venues.</li>
        <li id="healthcare"><b>Healthcare & Educational Security</b> – Ensuring safety in hospitals, clinics, and schools with tailored security plans.</li>
        <li id="monitoring"><b>24/7 Monitoring & Rapid Response</b> – Real-time surveillance and GPS-tracked patrols for immediate threat response.</li>
        <li id="consulting"><b>Integrated Security Consulting</b> – Risk assessment and custom protection plans for businesses and institutions.</li>
      </ul>
    </div>
  );
};

export default ProductAndServices;
