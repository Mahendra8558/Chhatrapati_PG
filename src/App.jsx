// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image1 from "./assets/Image1.jpg"
import Image3 from "./assets/Image3.jpg"
import Image15 from "./assets/Image15.jpg"
import Logo from "./assets/Logo1.jpg"

function App() {
  const properties = [
    {
      id: 1,
      name: "Deluxe Room",
      img: Image1,
      desc: "Spacious deluxe room with modern amenities."
    },
    {
      id: 2,
      name: "Shared Room",
      img: Image3,
      desc: "Affordable shared accommodation for students."
    },
    {
      id: 3,
      name: "Premium Suite",
      img: Image15,
      desc: "Luxury suite with premium facilities."
    }
  ];

  const facilities = [
    { id: 1, icon: "bi-wifi", label: "Free Wi-Fi" },
    { id: 2, icon: "bi-bus-front", label: "Near Bus Stop" },
    { id: 3, icon: "bi-fan", label: "AC Rooms" },
    { id: 4, icon: "bi-cup-hot", label: "Meals Included" },
    { id: 5, icon: "bi-shield-check", label: "24/7 Security" },
    { id: 6, icon: "bi-geo-alt", label: "Prime Location" }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        
        <div className="container">
          
       <a className="navbar-brand fw-bold text-warning d-flex align-items-center" href="#">
  <img
    src={Logo}
    alt="Chhatrapati PG Logo"
    style={{ height: "40px", marginRight: "10px" }}
  />
  Chhatrapati PG
</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#properties">
                  Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#facilities">
                  Facilities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-warning text-dark text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Chhatrapati PG</h1>
          <p className="lead">
            Your comfortable and affordable stay near college & workplace
          </p>
          <a href="#properties" className="btn btn-dark btn-lg mt-3">
            Explore Rooms
          </a>
        </div>
      </header>

      {/* Properties */}
      <section id="properties" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Our Properties</h2>
          <div className="row g-4">
            {properties.map((p) => (
              <div className="col-md-4" key={p.id}>
                <div className="card shadow h-100">
                  <img src={p.img} style={{width:"360px",height:"350px"}} className="card-img-top" alt={p.name} />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.desc}</p>
                    <a href="#contact" className="btn btn-warning">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Facilities We Provide</h2>
          <div className="row text-center g-4">
            {facilities.map((f) => (
              <div className="col-6 col-md-4" key={f.id}>
                <div className="p-4 bg-white border rounded shadow-sm">
                  <i className={`bi ${f.icon} fs-1 text-warning`}></i>
                  <p className="mt-2 fw-semibold">{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5>Reach Us At</h5>
              <p>
                <i className="bi bi-telephone-fill text-warning"></i> +91 9096679934
              </p>
              <p>
                <i className="bi bi-envelope-fill text-warning"></i>{" "}
                info@chhatrapatipg.com
              </p>
              <p>
                <i className="bi bi-geo-alt-fill text-warning"></i> Near Indian
                Oil Petrol Pump, Fatehgunj , Vadodara
              </p>
              <p>
  <a
    href="https://wa.me/918007406321?text=Hello%20I%20want%20to%20know%20more%20about%20Chhatrapati%20PG"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success d-inline-flex align-items-center mt-2"
  >
    <i className="bi bi-whatsapp me-2"></i> Chat on WhatsApp
  </a>
</p>
<p>
  <a
    href="https://www.instagram.com/chhatrapati_pg?igsh=MjFmdHh6bW9qcjlk"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-danger d-inline-flex align-items-center mt-2"
  >
    <i className="bi bi-instagram me-2"></i> Follow on Instagram
  </a>
</p>
            </div>
            <div className="col-md-6">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123456789!2d73.123456!3d22.310123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f123456789%3A0xabcdef123456789!2sChatrapati%20PG%20Girls%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>
            © {new Date().getFullYear()} Chhatrapati PG | All Rights Reserved
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
