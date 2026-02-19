import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">

          // Contact 
          <div className="col-md-4 mb-4">
            <h5 className="text-danger">Contact Us</h5>
            <p>Email: support@pizzastore.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Open: 10 AM – 11 PM</p>
          </div>

          //FaQ
          <div className="col-md-4 mb-4">
            <h5 className="text-danger">FAQs</h5>
            <p>• How long does delivery take?</p>
            <p>30–45 minutes.</p>
            <p>• Do you offer refunds?</p>
            <p>Yes, for damaged or wrong orders.</p>
          </div>

          // Google Map 
          <div className="col-md-4 mb-4">
            <h5 className="text-danger">Find Us</h5>
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-4">
         ❤️ 𝕃𝕠𝕧𝕖 𝕒𝕥 𝕗𝕚𝕣𝕤𝕥 𝕓𝕚𝕥𝕖.🍕
        </div>
      </div>
    </footer>
  );
};

export default Footer;
